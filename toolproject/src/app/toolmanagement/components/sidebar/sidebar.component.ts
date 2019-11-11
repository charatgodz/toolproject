import { tmURL } from './../../toolmanagement.url';
import { AppURL } from './../../../app.url';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  AppURL = AppURL;
  tmURL = tmURL;

}
