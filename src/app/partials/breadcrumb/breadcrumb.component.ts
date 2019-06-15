import { Component, OnInit } from '@angular/core';
import { BreadcrumbStore } from 'src/app/common/store/breadcrumb.store';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    private store: BreadcrumbStore
  ) { }

  ngOnInit() {
  }

}
