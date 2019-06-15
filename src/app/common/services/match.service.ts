import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Match } from '../interfaces/match'

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  list(): Observable<Match[]> {
    return this.http.get(environment.API_URL + 'matches').pipe(
      map((res: Match[]) => {
        return res;
      })
    )
  }

  show(id: number): Observable<Match> {
    return this.http.get(environment.API_URL + 'matches/' + id).pipe(
      map((res: Match) => {
        return res;
      })
    )
  }
}
