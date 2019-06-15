import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/common/interfaces/match';
import { MatchService } from 'src/app/common/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService],
})
export class MatchListComponent implements OnInit {
  matches: Match[]

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.list().subscribe((res: Match[]) => {
      this.matches = res;
    });
  }

}
