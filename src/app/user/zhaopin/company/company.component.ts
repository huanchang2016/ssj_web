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
      { title: "首页", link: "/home"},
      { title: "招聘", link: '/zhaopin'},
      { title: "子菜单", childrenNav: [
            {childTitle: "子栏目1", childLink: "/xxx"},
            {childTitle: "子栏目2", childLink: "/zhaopin"},
          ]
      },
      { title: "other Link", link: '/xxx'}
    ],
    css:[
      { _selector:'com-nav .nav-list', _attr: "background", _value: "#ccc"}
    ]
  };

  constructor() { }

  ngOnInit() {
    
  }

}
