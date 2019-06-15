import { Routes } from '@angular/router'
import { MatchListComponent } from './resources/matches/match-list/match-list.component'
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component'
import { ContactComponent } from './resources/contact/contact.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MatchListComponent
  },

  {
    path: 'matches/:id',
    component: MatchDetailComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
]
