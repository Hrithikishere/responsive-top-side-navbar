import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  status: boolean = true;
  sidebarStatus: boolean = false;
  clickEvent() {
    this.status = !this.status;
    console.log(this.status);
    console.log('kano kaaj korena');
  }
  clickEventSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
  }
  constructor() {}

  ngOnInit(): void {}
}
