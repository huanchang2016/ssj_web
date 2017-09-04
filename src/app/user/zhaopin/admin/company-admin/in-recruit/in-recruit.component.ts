import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-recruit',
  templateUrl: './in-recruit.component.html',
  styleUrls: ['./in-recruit.component.css']
})
export class InRecruitComponent implements OnInit {

  public searchConditions: string = '';//查询条件
  public _checked : Boolean = false;//是否选中
  public _checkBox: Array<any> = [
    {checked:'' },
    {checked:'' },
    {checked:'' },
    {checked:'' },
    {checked:'' },
  ];
  public checkedAll: Boolean = false;//是否全选
  public checkedBox: Array<any> = [];//将选中的内容添加到数组中


  constructor() { }

  ngOnInit() {
  }

  addCheckedJobs($event){
    this.checkedBox = this._checkBox;
    console.log(this._checkBox);
  }
  // 全选状态
  checkedAllJobs(value){
    this._checkBox.forEach( el =>{
      el.checked  = value;
    });
  }
}
