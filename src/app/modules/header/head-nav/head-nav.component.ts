import { Component, OnInit, Input } from '@angular/core';

declare var $;

@Component({
  selector: 'header-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {

  @Input()
  public headerNav:any;
  // 设置导航菜单数组
  public navBox;
  public cssEditor;
  constructor() { }

  ngOnInit() {
    this.navBox = this.headerNav[0]['menu'];
    this.cssEditor = this.headerNav[0]['css'];
    for(let i=0,l=this.cssEditor.length;i<l;i++){
      let _css = this.cssEditor[i];
      $("." + _css['_selector']).css(_css['_attr'], _css['_value']);
    }
    
  }

}
