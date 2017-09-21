import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  public userInfoName: string;

  constructor() { }

  ngOnInit() {
    var userLoginInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
    console.log(userLoginInfo);
    this.userInfoName = userLoginInfo.userName;
  }

}
