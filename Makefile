################################################################################
# Copie des dists
$(shell test ! -f docker-compose.override.yml && cp docker-compose.override.dist.yml docker-compose.override.yml)
$(shell test ! -f .env && cp .env.dist .env)
# Inclusion de l'environnement
include .env
export $(shell sed 's/=.*//' .env)
################################################################################

# Action sur conteneurs
build-docker:
	docker-compose build $(c)
up:
	docker-compose up -d $(c)
	@grep -q -F $(DOMAIN) /etc/hosts || echo 127.0.0.1 $(DOMAIN) node-$(DOMAIN) | sudo tee -a /etc/hosts
create:
	make build-docker
	make up
start:
	docker-compose start $(c)
stop:
	docker-compose stop $(c)
down:
	docker-compose down --remove-orphan $(c)
	sudo sed -ie "/$(DOMAIN)/d" /etc/hosts
restart:
	make stop
	make start
logs:
	docker-compose logs -f $(c)

rm:
	docker-compose rm -f $(c)

# Commandes node
cli:
	docker-compose exec node bash
watch:
	xdg-open https://node-$(DOMAIN)/
	docker-compose exec node ng serve --disableHostCheck=true --host=0.0.0.0 --publicHost=https://node-$(DOMAIN)/
build: build-app
build-app:
	docker-compose exec -T node rm -rf dist/$(APPLICATION_NAME)/*
	docker-compose exec -T node ng build --deleteOutputPath=false
publish:
	docker-compose exec -T node rm -rf dist/$(APPLICATION_NAME)/*
	docker-compose exec -T node ng build --deleteOutputPath=false --prod --base-href=https://nicodmf.github.io/angular8/
	rm -rf docs && cp -rf dist/$(APPLICATION_NAME) docs
	git add . && git commit -a -m 'publish' && git push
analyze:
	docker-compose exec -T node npm run analyze
	xdg-open build/analyze.html

# Tests
test:
	docker-compose exec -T node ng lint
	docker-compose exec -T node ng test --watch=false
test-watch:
	xdg-open http://test-$(DOMAIN)/
	docker-compose exec node ng test --watch=true
test-e2e-watch:
	xdg-open http://test-$(DOMAIN)/
	docker-compose exec node ng e2e --port=9876 --host=0.0.0.0

# Déploiement et installations
install:
	docker-compose exec -T node npm ci
