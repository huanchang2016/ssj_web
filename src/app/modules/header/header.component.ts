import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public phoneNumber:string = '028-80510871';
  
  //传递给导航组件的参数
  public navListContent = {
    menu:[
      { title: "首页", link: "./home"},
      { title: "招聘", link: './zhaopin'},
      { title: "子菜单", childrenNav: [
            {childTitle: "子栏目1", childLink: "./xxx"},
            {childTitle: "子栏目2", childLink: "./xxx"},
          ]
      },
      { title: "other Link", link: './xxx'}
    ],
    css:[
      { _selector:'nav-list', _attr: "background", _value: "#009cff"}
    ],
    routerActiveClass: 'am-active'
  }; 

  constructor() { }

  ngOnInit() {
  }

}
