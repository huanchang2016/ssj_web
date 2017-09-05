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
    var user_info = JSON.parse(window.localStorage.getItem("user_info"));
    var user_birthday = '';
    if(user_info.userBirthday){
      // console.log(user_info.userBirthday.split("T"));
    }
    // 初始化表单
    this.userInfosForm = this.fb.group({
      userName: [user_info.userName, [Validators.required]],//姓名
      userSex: [user_info.userSex, [Validators.required]],//性别
      userBirthday: [ null, [Validators.required]],//出生年月
      userIdcard: [user_info.userIdcard, [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{16}[(0-9)|x|X]$")]],//身份证号码
      maxDegree: [user_info.maxDegree, [Validators.required]],//最高学历
      workExp: [user_info.workExp, Validators.required],//工作经验
      phoneNumber: [user_info.phoneNumber, [Validators.required, Validators.pattern("^0?(13|14|15|18)[0-9]{9}$")]],//手机号码
      userEmail: [user_info.userEmail, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
      liveAddress: [user_info.liveAddress, [Validators.required]],//现居住地
      maritalStatus:[user_info.maritalStatus],//婚姻状况
      detailedAddress: [user_info.detailedAddress],// 详细地址
      houseAddress: [user_info.houseAddress],// 户籍所在地
      linkPhone: [user_info.linkPhone, [Validators.required, Validators.pattern("^[0-9-()（）]{7,18}$")]],//固定电话
      website: [user_info.website]//个人博客
    });
  }

  _submitUserInfosForm() {
    console.log(this.userInfosForm['_value']);
    // 本地存储个人信息
    window.localStorage.setItem("user_info", JSON.stringify(this.userInfosForm['_value']));
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
