import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-seekers',
  templateUrl: './job-seekers.component.html',
  styleUrls: ['./job-seekers.component.css']
})
export class JobSeekersComponent implements OnInit {

  public seekersForm: FormGroup;
  public workAddress:any;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.seekersForm = this.fb.group({
      jobClass: [null],//职位类别
      workAddress: [ null ],//工作地点(省市级联)
      jobSalary : [ null],//薪资待遇
      jobPosted: [ null ],//更新时间
      // 补充信息(其它内容)
      workExp: [ null],//工作经验
      minDegree: [null],//学历要求
      sexGender: [ null ],//  性别要求
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

}
