FROM node:12-alpine

WORKDIR /app

EXPOSE 8080

RUN apk --no-cache update \
    && apk --no-cache add bash ncurses bash-completion \
       git \
    && rm -fr /var/cache/apk/* \
    && npm completion >> /usr/share/bash-completion/completions/npm \
    && npm install -g @angular/cli \
    && echo "Fin des istallations" 

CMD ["sleep", "360000"]
