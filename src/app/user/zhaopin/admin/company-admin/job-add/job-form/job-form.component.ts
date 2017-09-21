import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  @Input()
  editJobInfo;

  @Output()
  formValue: EventEmitter<any> =  new EventEmitter;
  
  public jobAddForm: FormGroup;
  // 子组件绑定
  public workAddress:any;//工作地点
  public dafaultAddress: any;

  //职位类别
  public jobClassArr = [
    { label: '计算机/互联网', value: "计算机/互联网"},
    { label: '机械/设备/技工', value: "机械/设备/技工"},
    { label: '计算机/互联网', value: "计算机/互联网"}
  ];


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
  // 薪资
  jobSalaryArr = [
    {label:"面议" , value:"面议"},
    {label:"2k-4k" , value:"2k-4k"},
    {label:"4k-6k" , value:"4k-6k"},
    {label:"6k-8k" , value:"6k-8k"},
    {label:"8k-10k" , value:"8k-10k"},
    {label:"10k-15k" , value:"10k-15k"},
    {label:"15k-25k" , value:"15k-25k"},
    {label:"25k-50k" , value:"25k-50k"},
    {label:"50k以上" , value:"50k以上"}
  ];

  // 编辑器
  config = {
    filebrowserBrowseUrl: '&&&&&',  
    filebrowserUploadUrl: '&&&'
  };
  // 从事行业
  public jobIndustryArr = [
    { label: '计算机/互联网', value: "计算机/互联网"},
    { label: '机械/设备/技工', value: "机械/设备/技工"},
    { label: '计算机/互联网', value: "计算机/互联网"}
  ];
  // 工作性质
  public workTypeArr = [
    { label: '全职', value: "全职"},
    { label: '兼职', value: "兼职"}
  ];
  // 到岗时间
  public arrivalTimeArr = [
    {label:"立即到岗", value:"立即到岗"},
    {label:"一周以内", value:"一周以内"},
    {label:"两周以内", value:"两周以内"},
    {label:"三周以内", value:"三周以内"},
    {label:"一个月内", value:"一个月内"}
  ];
  // 工作经验
  public workExpArr = [
    {label:"无要求", value: "无要求"},
    {label:"1年以下", value: "1年以下"},
    {label:"1-3年", value: "1-3年"},
    {label:"3-5年", value: "3-5年"},
    {label:"5-8年", value: "5-8年"},
    {label:"8年以上", value: "8年以上"},
    {label:"详见职位描述", value: "详见职位描述"}
  ];
  // 性别要求
  public sexGenderArr = [
    { label: '男', value: '男'},
    { label: '女', value: '女'},
    { label: '无要求', value: '无要求'}
  ];
  // 年龄要求
  public ageRangeArr = [
   {label: "18岁以上", value: "18岁以上"},
   {label: "24岁以上", value: "24岁以上"},
   {label: "28岁以上", value: "28岁以上"},
   {label: "30岁以上", value: "30岁以上"},
   {label: "40岁以上", value: "40岁以上"},
   {label: "详见职位要求", value: "详见职位要求"}
  ];
  // 婚姻状况
  public maritalStatusArr = [
    {label:"已婚", value: "已婚"},
    {label:"未婚", value: "未婚"},
    {label:"无要求", value: "无要求"},
  ];
  // 学历要求
  public minDegreeArr = [
    {label: "高中及以下", value: "高中及以下"},
    {label: "大专", value: "大专"},
    {label: "本科", value: "本科"},
    {label: "硕士", value: "硕士"},
    {label: "博士", value: "博士"},
    {label: "无要求", value: "无要求"}
  ];

  // 判断为发布职位还是修改职位信息
  public isJobAdd = '';


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    if(this.editJobInfo){
      this.isJobAdd = '更新职位信息';
      var jobEditInfo = JSON.parse(window.localStorage.getItem('amendJobInfo'));
      this.dafaultAddress = [jobEditInfo.companyAddress.province, jobEditInfo.companyAddress.city, jobEditInfo.companyAddress.area];

      this.jobAddForm = this.fb.group({
        jobName: [jobEditInfo.jobName, [Validators.required]],//职位名称
        jobClass: [jobEditInfo.jobClass, [Validators.required]],//从事行业
        workAddress: [ this.dafaultAddress, [ Validators.required ] ],//工作地点(省市级联)
        releaseDate: [ null, [Validators.required] ],//职位过期时间
        jobSalary : [ jobEditInfo.jobSalary, [ Validators.required ]],//薪资待遇
        jobDescribe: [  jobEditInfo.jobsDescription, [Validators]],//职位描述
        // 补充信息(其它内容)
        jobIndustry: [ jobEditInfo.jobIndustry, [Validators.required]],//从事行业
        personNumber: [ jobEditInfo.personNumber, [ Validators.required ]],//招聘人数
        workExp: [  jobEditInfo.workExp, [Validators.required]],//工作经验
        ageRange: [ jobEditInfo.ageRange, [Validators.required]],//年龄要求
        minDegree: [jobEditInfo.minDegree, [Validators.required]],//学历要求
        workType: [ jobEditInfo.workType, [Validators.required] ],// 工作性质
        arrivalTime : [ jobEditInfo.arrivalTime, [Validators.required] ],//  到岗时间
        sexGender: [ jobEditInfo.sexGender, [Validators.required] ],//  性别要求
        maritalStatus: [ jobEditInfo.maritalStatus, [Validators.required] ],// 婚姻状况
        language: [ null, [Validators.required] ],//要求语种
        workWelfare: [ null, [Validators.required]],//福利待遇，如五险一金
        // 联系方式(个人填写(默认单位))
        linkPhone1: [ jobEditInfo.linkPhone1, [ Validators.pattern('^0?(13|14|15|18)[0-9]{9}$')] ],
        linkPhone2: [ jobEditInfo.linkPhone1, [ Validators.pattern('[0-9-()（）]{7,18}')] ],
        acceptResumeEmail1 : [jobEditInfo.acceptResumeEmail1, [ Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
        acceptResumeEmail2 : [jobEditInfo.acceptResumeEmail2, [ Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      });

    }else{
      this.isJobAdd = '发布职位';
      this.jobAddForm = this.fb.group({
        jobName: [null, [Validators.required]],//职位名称
        jobClass: [null, [Validators.required]],//从事行业
        workAddress: [ null, [ Validators.required ] ],//工作地点(省市级联)
        releaseDate: [ null, [Validators.required] ],//职位过期时间
        jobSalary : [  null, [ Validators.required ]],//薪资待遇
        jobDescribe: [  null, [Validators]],//职位描述
        // 补充信息(其它内容)
        jobIndustry: [ null, [Validators.required]],//从事行业
        personNumber: [ null, [ Validators.required ]],//招聘人数
        workExp: [  null, [Validators.required]],//工作经验
        ageRange: [ null, [Validators.required]],//年龄要求
        minDegree: [null, [Validators.required]],//学历要求
        workType: [ null, [Validators.required] ],// 工作性质
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
       
    
  }
  setNewJob() {
    
    for (const i in this.jobAddForm.controls) {
      this.jobAddForm.controls[i].markAsDirty();
    }
    
    if(this.jobAddForm['_status'] == "INVALID"){
      return false;
    }else{
      this.formValue.emit(this.jobAddForm['_value']);
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
