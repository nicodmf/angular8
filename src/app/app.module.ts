import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component';
import { MatchListComponent } from './resources/matches/match-list/match-list.component';
import { SafePipe } from './common/pipe/safe.pipe';
import { BreadcrumbComponent } from './partials/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchDetailComponent,
    MatchListComponent,
    SafePipe,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
