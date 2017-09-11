import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './head-middle.component.html',
  styleUrls: ['./head-middle.component.css']
})
export class HeadMiddleComponent implements OnInit {

  public _value = "";
  constructor() { }

  ngOnInit() {
  }

  _search(value){
    console.log(value);
  }

}
