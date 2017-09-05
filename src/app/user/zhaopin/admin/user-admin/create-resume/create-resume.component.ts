import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {
    userResumeForm: FormGroup;

    // 期望城市
    public workAddress:any;//工作地点
  
    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
      // 初始化表单
      this.userResumeForm = this.fb.group({
        resumeName: [null, [Validators.required]],//简历名称
        jobsClass: [null, [Validators.required]],//从事行业
        jobsName: [null, [Validators.required]],//期望职位
        jobsSalary: [null, [Validators.required]],//期望薪资
        jobsAddr: [null, [Validators.required]],//期望工作城市
        jobNature:[null, [Validators.required]],//工作性质
        arrivalTime:[null, [Validators.required]],//到岗时间
        JobStatus:[null, [Validators.required]],//求职状态
        
        userName: [null, [Validators.required]],//姓名
        userSex: [null, [Validators.required]],//性别
        userBirthday: [null, [Validators.required]],//出生年月
        userIdcard: [null, [Validators.required]],//身份证号码
        maxDegree: [null, [Validators.required]],//最高学历
        workExp: [null, Validators.required],//工作经验
        phoneNumber: [null, [Validators.required]],//手机号码
        userEmail: [null, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
        liveAddress: [null, [Validators.required]],//手机号码
        houseAddress: [null],// 现居住地
        maritalStatus:[null],//婚姻状况
        detailedAddress: [null],// 详细地址
        linkPhone: [null],//固定电话
        website: [null]//个人博客
      });
    }
    getJobWorkAddress(value){
      this.userResumeForm['_value'].workAddress = value;
      this.workAddress = value;
    }

    _submitUserResumeForm() {
      console.log(this.userResumeForm['_value']);
      
      for (const i in this.userResumeForm.controls) {
        this.userResumeForm.controls[i].markAsDirty();
      }
    }

    getCaptcha(e: MouseEvent) {
      e.preventDefault();
    }



    getFormControl(name) {
      return this.userResumeForm.controls[name];
    }
}
