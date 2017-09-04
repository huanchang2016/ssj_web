import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  userInfosForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // 初始化表单
    this.userInfosForm = this.fb.group({
      userName: [null, [Validators.required]],//姓名
      userSex: [null, [Validators.required]],//性别
      userBirthday: [null, [Validators.required]],//出生年月
      userIdcard: [null, [Validators.required]],//身份证号码
      maxDegree: [null, [Validators.required]],//最高学历
      workExp: [null, Validators.required],//工作经验
      phoneNumber: [null, [Validators.required]],//手机号码
      userEmail: [null, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      liveAddress: [null, [Validators.required]],//手机号码
      maritalStatus:[null],//婚姻状况
      detailedAddress: [null],// 详细地址
      houseAddress: [null],// 详细地址
      linkPhone: [null],//固定电话
      website: [null]//个人博客
    });
  }

  _submitUserInfosForm() {
    console.log(this.userInfosForm['_value']);

    for (const i in this.userInfosForm.controls) {
      this.userInfosForm.controls[i].markAsDirty();
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }



  getFormControl(name) {
    return this.userInfosForm.controls[name];
  }


}
