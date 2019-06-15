import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/common/interfaces/match';
import { MatchService } from 'src/app/common/services/match.service';
import { BreadcrumbStore } from 'src/app/common/store/breadcrumb.store';


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService],
})
export class MatchListComponent implements OnInit {
  matches: Match[]

  constructor(private matchService: MatchService, private breadcrumbStore: BreadcrumbStore) { }

  ngOnInit() {
    this.matchService.list().subscribe((res: Match[]) => {
      this.matches = res;
    });
    this.breadcrumbStore.setPaths([
      {label: 'matches', icon: 'fas fa-home'},
    ])

  }

}
