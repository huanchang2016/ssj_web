import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {

  public jobAddForm: FormGroup;
  // 子组件绑定
  public workAddress:any;//工作地点

  // 多选框组 语言要求
  checkOptionslanguage = [
    { label: '普通话一级', value: '普通话一级' },
    { label: '普通话二级', value: '普通话二级' },
    { label: '普通话三级', value: '普通话三级' },
    { label: '英语四级', value: '英语四级' },
    { label: '英语六级', value: '英语六级' },
    { label: '韩语', value: '韩语' },
    { label: '德语', value: '德语' },
    { label: '法语', value: '法语' },
    { label: '西班牙语', value: '西班牙语' }
  ];
  // 福利待遇
  checkOptionsWelfare = [
    { label: '五险一金', value: '五险一金' },
    { label: '包吃住', value: '包吃住' },
    { label: '综合补贴', value: '综合补贴' },
    { label: '年终奖金', value: '年终奖金' },
    { label: '奖励计划', value: '奖励计划' },
    { label: '销售奖金', value: '销售奖金' },
    { label: '休假制度', value: '休假制度' },
    { label: '法定节假日', value: '法定节假日' }
  ];
  // 编辑器
  config = {
    filebrowserBrowseUrl: '&&&&&',  
    filebrowserUploadUrl: '&&&'
  };

  constructor(
    private fb: FormBuilder
  ) { }

  
  ngOnInit() {
    this.jobAddForm = this.fb.group({
      jobName: [null, [Validators.required]],//职位名称
      jobClass: [null, [Validators.required]],//从事行业
      workAddress: [ null, [ Validators.required ] ],//工作地点(省市级联)
      jobPosted: [ null, [Validators.required] ],//职位发布天数
      jobSalary : [ null, [ Validators.required ]],//薪资待遇
      jobDescribe: [ null, [Validators]],//职位描述
      // 补充信息(其它内容)
      jobIndustry: [null, [Validators.required]],//从事行业
      personNumber: [ null, [ Validators.required ]],//招聘人数
      workExp: [ null, [Validators.required]],//工作经验
      ageRange: [null, [Validators.required]],//年龄要求
      minDegree: [null, [Validators.required]],//学历要求
      jobNatrue: [ null, [Validators.required] ],// 工作性质
      arrivalTime : [ null, [Validators.required] ],//  到岗时间
      sexGender: [ null, [Validators.required] ],//  性别要求
      maritalStatus: [ null, [Validators.required] ],// 婚姻状况
      language: [ null, [Validators.required] ],//要求语种
      workWelfare: [ null, [Validators.required]],//福利待遇，如五险一金
      // 联系方式(个人填写(默认单位))
      linkPhone1: [ '13333333333', [ Validators.pattern('^0?(13|14|15|18)[0-9]{9}$')] ],
      linkPhone2: [ '028-80518071', [ Validators.pattern('[0-9-()（）]{7,18}')] ],
      acceptResumeEmail1 : ['admin@cdtfhr.com', [ Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      acceptResumeEmail2 : [null, [ Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
    });
  }
  setNewJob() {
    console.log(this.jobAddForm['_value']);
    for (const i in this.jobAddForm.controls) {
      this.jobAddForm.controls[i].markAsDirty();
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  getFormControl(name) {
    return this.jobAddForm.controls[name];
  }

  // 工作地点
  getJobWorkAddress(value){
    this.jobAddForm['_value'].workAddress = value;
    this.workAddress = value;
  }

  // 职位过期时间，日历组件
  _disabledDate = function (current) {
    return current && current.getTime() < Date.now();
  };
// 语言要求方法
  _logCheckbox(value){
    var chechedLanguage = [];
    value.forEach(el => {
      if(el.checked){
        chechedLanguage.push(el);
      }
    });
    this.jobAddForm['_value'].language = chechedLanguage;
  }

  // 福利待遇
  _logWorkWelfareBox(value){
    // console.log(value);
  }
}
