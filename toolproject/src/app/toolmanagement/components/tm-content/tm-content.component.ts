import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-tm-content',
  templateUrl: './tm-content.component.html',
  styleUrls: ['./tm-content.component.css']
})
export class TmContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadscipt();
  }

  loadscipt(){
    $(document).ready(function () {
      var body = $('body');
  
      body.tooltip({
          selector: '[data-toggle="tooltip"]'
      });
      body.popover({
          selector: '[data-toggle="popover"]'
      });
  
      $('.sidebar-toggle').on('click', function (e) {
          e.preventDefault();
          $('.sidebar').toggleClass('toggled');
      });
  });
  }


}
