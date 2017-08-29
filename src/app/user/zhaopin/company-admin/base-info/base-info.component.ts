import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  registForm: FormGroup;
  // 文件上传初始化
  public uploader: FileUploader = new FileUploader({
    url: "http://localhost:4200/uploadFile",
    method: "POST"
  });
  // 判断是否上传文件
  public isNotUpFile: Boolean;

  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registForm = this.fb.group({
      companyName: [null, [Validators.required]],
      companyClass: [null, [Validators.required]],
      companyNature: [ null, [Validators.required] ],
      comNickname : [ null, [ Validators.required ]],
      phoneNumber: [null, [Validators.required]],
      website: [null],
      address: [ null, [ Validators.required ]],
      companyEmail: [null, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      comOrganization: [null, [ Validators.required]],
      agree: [false]
    });
  }

  _submitRegistForm() {
    console.log(this.registForm['_value']);//表单所有的数据都在this.registForm['_value']这个对象中

    //单独判断图片是否已经上传
    if(!this.registForm['_value'].comOrganization){
      this.isNotUpFile = true;
    }else{ 
      this.isNotUpFile = false;
    }

    for (const i in this.registForm.controls) {
      this.registForm.controls[i].markAsDirty();
    }
  }


  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.registForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }



  getFormControl(name) {
    return this.registForm.controls[name];
  }

  // 检查上传文件
  selectedFileOnChanged($event){
    this.registForm['_value'].comOrganization = $event.target.value;
    console.log(this.registForm['_value'].comOrganization);
  }
}
