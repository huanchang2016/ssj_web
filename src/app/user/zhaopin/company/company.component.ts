import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companyIsChecked = false;//公司是否认证

  public companyHomePageNav = {
    menu:[
      { title: "公司主页", link: "./home"},
      { title: "招聘职位", link: './jobs'},
      { title: "校招职位", link: "./recruit"},
      { title: "公司问答", link: './ask'}
    ],
    css:[
      { _selector:'com-nav .nav-list', _attr: "background", _value: "#ccc"}
    ],
    routerActiveClass: 'com-active'
  };

  constructor() { }

  ngOnInit() {
    
  }

}
