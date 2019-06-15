import { Component, OnInit, Pipe } from '@angular/core';
import { Match } from 'src/app/common/interfaces/match';
import { MatchService } from 'src/app/common/services/match.service';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id
    this.matchService.show(id).subscribe((res: Match) => {
      const video = res.video_url.match(/=.*&/)[0];
      res.video_url = "https://www.youtube.com/embed/" + video.slice(1, video.length - 1) + "?autoplay=1&origin=https://www.lfp.fr/"
      this.match = res;
    })
  }
}
