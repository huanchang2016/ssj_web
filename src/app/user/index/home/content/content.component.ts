import { Component, OnInit } from '@angular/core';

const contentList :any[] = [
  {title: '展示内容第一部分', con: "展示内容第一部分展示内容第一部分展示内容第一部分"},
  {title: '展示内容第一部分', con: "展示内容第一部分展示内容第一部分展示内容第一部分"},
  {title: '展示内容第一部分', con: "展示内容第一部分展示内容第一部分展示内容第一部分"},
  {title: '展示内容第一部分', con: "展示内容第一部分展示内容第一部分展示内容第一部分"},
  {title: '展示内容第一部分', con: "展示内容第一部分展示内容第一部分展示内容第一部分"}
]

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public content:any[] = contentList;
  constructor() { }

  ngOnInit() {
  }

}
