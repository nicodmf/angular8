import { Component, OnInit, Pipe } from '@angular/core';
import { Match } from 'src/app/common/interfaces/match';
import { MatchService } from 'src/app/common/services/match.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbStore } from 'src/app/common/store/breadcrumb.store';
import { Path } from 'src/app/common/interfaces/path';

@Pipe({ name: 'safe' })
@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
  providers: [MatchService],
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbStore: BreadcrumbStore,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id
    this.matchService.show(id).subscribe((res: Match) => {
      const video = res.video_url.match(/=.*&/)[0];
      res.video_url = "https://www.youtube.com/embed/" + video.slice(1, video.length - 1) + "?autoplay=1&origin=https://www.lfp.fr/"
      this.match = res;

    })
  }
  ngAfterContentChecked() {
    if(!this.match) {
      return;
    }
    this.breadcrumbStore.setPaths([
      {label: 'matches', target: '/', icon: 'fas fa-home'},
      {label: `match ${this.match.home_team} vs ${this.match.away_team}`, target: null},
    ]);
  }
}
