import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-chef',
  templateUrl: './sidebar-chef.component.html',

})
export class SidebarChefComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

}
