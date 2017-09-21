import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  tabs = [
    { title: '就业信息',
      content:[
        {title:'就业信息-新闻标题', date: '2017-09-20'},{title:'就业信息-新闻标题', date: '2017-09-21'},
        {title:'就业信息-新闻标题', date: '2017-09-22'},{title:'就业信息-新闻标题', date: '2017-09-23'},
        {title:'就业信息-新闻标题', date: '2017-09-24'},{title:'就业信息-新闻标题', date: '2017-09-25'},
        {title:'就业信息-新闻标题', date: '2017-09-20'},{title:'就业信息-新闻标题', date: '2017-09-21'},
        {title:'就业信息-新闻标题', date: '2017-09-22'},{title:'就业信息-新闻标题', date: '2017-09-23'},
        {title:'就业信息-新闻标题', date: '2017-09-24'},{title:'就业信息-新闻标题', date: '2017-09-25'}
      ]},
    { title: '就业政策',
      content:[
        {title:'就业政策-新闻标题', date: '2017-09-20'},{title:'就业政策-新闻标题', date: '2017-09-21'},
        {title:'就业政策-新闻标题', date: '2017-09-20'},{title:'就业政策-新闻标题', date: '2017-09-21'},
        {title:'就业政策-新闻标题', date: '2017-09-20'},{title:'就业政策-新闻标题', date: '2017-09-21'},
        {title:'就业政策-新闻标题', date: '2017-09-20'},{title:'就业政策-新闻标题', date: '2017-09-21'},
        {title:'就业政策-新闻标题', date: '2017-09-22'},{title:'就业政策-新闻标题', date: '2017-09-23'},
        {title:'就业政策-新闻标题', date: '2017-09-24'},{title:'就业政策-新闻标题', date: '2017-09-25'}
        
      ]},
    { title: '网站公告',
      content:[
        {title:'网站公告-新闻标题', date: '2017-09-20'},
        {title:'网站公告-新闻标题', date: '2017-09-21'},
        {title:'网站公告-新闻标题', date: '2017-09-22'},
        {title:'网站公告-新闻标题', date: '2017-09-23'},
        {title:'网站公告-新闻标题', date: '2017-09-24'},
        {title:'网站公告-新闻标题', date: '2017-09-25'}
      ]},
    { title: '办事大厅',
      content:[
        {title:'办事大厅-新闻标题', date: '2017-09-20'},
        {title:'办事大厅-新闻标题', date: '2017-09-21'},
        {title:'办事大厅-新闻标题', date: '2017-09-22'},
        {title:'办事大厅-新闻标题', date: '2017-09-23'},
        {title:'办事大厅-新闻标题', date: '2017-09-24'},
        {title:'办事大厅-新闻标题', date: '2017-09-25'}
      ]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
