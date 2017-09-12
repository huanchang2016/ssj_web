import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resume-manage',
  templateUrl: './resume-manage.component.html',
  styleUrls: ['./resume-manage.component.css']
})
export class ResumeManageComponent implements OnInit {

  public seekersForm: FormGroup;
  public workAddress:any;

  public _checked: Boolean = false;
  public _checkedAll:Boolean = true;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.seekersForm = this.fb.group({
      jobSeekerName: [ null ],//姓名搜索
      jobName: [null],//职位名称
      finaceRadioValue: [ null ],//是否合适
      jobPosted: [ null ] //简历更新时间
      
    });
  }

  searchSeekers() {
    console.log(this.seekersForm['_value']);
    for (const i in this.seekersForm.controls) {
      this.seekersForm.controls[i].markAsDirty();
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  getFormControl(name) {
    return this.seekersForm.controls[name];
  }

  // 工作地点
  getJobWorkAddress(value){
    this.seekersForm['_value'].workAddress = value;
    this.workAddress = value;
  }

  // 职位过期时间，日历组件
  _disabledDate = function (current) {
    return current && current.getTime() < Date.now();
  };


  // 简历列表管理

  //简历操作
  _delResume(){ console.log( '删除简历');}
  _inviteView(){ console.log('邀请面试');}
  _reject(){ console.log( "拒绝面试");}

  addCheckedJobs(value){
    console.log(value);
  }
  // 全选状态
  checkedAllJobs(value){
    console.log(value);
  }
  // 全选操作
  _allRead(){ console.log("批量阅读");}
  _allDelete(){ console.log("批量删除");}
  _allDownload(){ console.log("批量下载");}

}
