import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  // 双向绑定处理验证提示效果
  public location: any;// 单位所在地
  public comOrganization: any;//单位组织机构代码证
  public businessLicense: any;//单位公司营业执照
  public LegalIdentityCard: any;//法人身份证


  registForm: FormGroup;
  // 文件上传初始化
  public uploadLicense: FileUploader = new FileUploader({
    url: "http://localhost:4200/uploadFile",
    method: "POST",
    maxFileSize: 1024
  });
  public uploadIdcard: FileUploader = new FileUploader({
    url: "http://localhost:4200/uploadFile",
    method: "POST",
    maxFileSize: 1024
  });
  public uploadOrg: FileUploader = new FileUploader({
    url: "http://localhost:4200/uploadFile",
    method: "POST",
    maxFileSize: 1024
  });
  // 判断是否上传文件
  public isNotUpFile: Boolean;

  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registForm = this.fb.group({
      companyName: [null, [Validators.required]],//单位名称
      companyClass: [null, [Validators.required]],//单位行业
      companyNature: [ null, [Validators.required] ],//公司性质
      comNickname : [ null, [ Validators.required ]],//单位简称
      phoneNumber: [null, [Validators.required]],//单位联系人
      location: [ null, [ Validators.required ] ],//单位所在地(省市级联)
      address: [ null, [ Validators.required ]],//单位住址
      companyEmail: [null, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      businessLicense: [null, [Validators.required]],//工商营业执照
      LegalIdentityCard: [ null, [Validators.required]],
      comOrganization: [null, [ Validators.required]],//组织机构代码
      website: [null],//公司网址
      agree: [false]//是否确认以上信息属实
    });
  }

  _submitRegistForm() {
    console.log(this.registForm['_value']);//表单所有的数据都在this.registForm['_value']这个对象中

    //单独判断图片是否已经上传
    // if(!this.registForm['_value'].comOrganization){
    //   this.isNotUpFile = true;
    // }else{ 
    //   this.isNotUpFile = false;
    // }

    for (const i in this.registForm.controls) {
      this.registForm.controls[i].markAsDirty();
    }
  }


  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }



  getFormControl(name) {
    return this.registForm.controls[name];
  }

  // 获取省市级联的信息
  getCompanyLocation(value){
    this.registForm['_value'].location = value;
    this.location = value;
  }
  
  // 检查上传文件
  selectedFileOnChanged($event, attr){
    this.registForm['_value'][attr] = this.uploadLicense.queue;
    this[attr]= ($event.target.value);

  }

}
