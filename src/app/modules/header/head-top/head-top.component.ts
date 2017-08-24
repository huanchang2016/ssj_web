import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-top',
  templateUrl: './head-top.component.html',
  styleUrls: ['./head-top.component.css']
})
export class HeadTopComponent implements OnInit {

  public phoneNumber: string = '028-80518071';
  constructor() { }

  ngOnInit() {
  }

}
