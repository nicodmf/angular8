import { Injectable } from '@angular/core';
import { Path } from '../interfaces/path';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbStore {
  private $paths: BehaviorSubject<Path[]> = new BehaviorSubject([]);
  public paths: Observable<Path[]> = this.$paths.asObservable();


  constructor() { }

  setPaths(paths: Path[]) {

    this.$paths.next(paths);
  }

}
