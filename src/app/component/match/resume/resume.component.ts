import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/common/interfaces/match';

@Component({
  selector: 'app-match-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class MatchResumeComponent implements OnInit {

  @Input() match: Match;
  constructor() { }

  ngOnInit() {
  }

}
