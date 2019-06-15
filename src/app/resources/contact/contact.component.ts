import { Component, OnInit } from '@angular/core';
import { BreadcrumbStore } from 'src/app/common/store/breadcrumb.store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private breadcrumbStore: BreadcrumbStore) { }

  ngOnInit() {
    this.breadcrumbStore.setPaths([
      {label: 'matches', target: '/', icon: 'fas fa-home'},
      {label: 'contact'}
    ])
  }

}
