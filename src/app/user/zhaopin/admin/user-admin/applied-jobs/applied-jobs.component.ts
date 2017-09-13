import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  public resumeStatus: string = '全部';//简历状态
  public resumeDate: string = '全部'; //简历投递时间
  public _checked: Boolean = false; //是否选中 多选框
  public _checkAll: Boolean = false; //操作全选

  constructor() { }

  ngOnInit() {
  }

  _cbValueChange(value){//多选框事件
    console.log(value);
  }

  _checkedAll(value){//全选所有
    console.log(value);
  }
  _delChecked(value){//删除选中项
    console.log("删除选中项");
  }

}
