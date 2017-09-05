import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {
    userResumeForm: FormGroup;
    // 获取本地存储的个人基本信息
    public user_info :any;

    // 期望城市
    public jobsAddr:any;//工作地点
  
    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
      var user_msg = JSON.parse(window.localStorage.getItem("user_info"));
      if(user_msg){
        console.log(user_msg);
      }
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
        
        userName: [user_msg.userName, [Validators.required]],//姓名
        userSex: [user_msg.userSex , [Validators.required]],//性别
        userBirthday: [user_msg.userBirthday, [Validators.required]],//出生年月
        userIdcard: [user_msg.userIdcard, [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{16}[(0-9)|x|X]$")]],//身份证号码
        maxDegree: [user_msg.maxDegree, [Validators.required]],//最高学历
        workExp: [user_msg.workExp, Validators.required],//工作经验
        phoneNumber: [user_msg.phoneNumber, [Validators.required, Validators.pattern("^0?(13|14|15|18)[0-9]{9}$")]],//手机号码
        userEmail: [user_msg.userEmail, [Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')]],
        liveAddress: [user_msg.liveAddress, [Validators.required]],//现居住地
        houseAddress: [user_msg.houseAddress],//户籍地
        website: [user_msg.website]//个人博客
      });
    }
    getJobjobsAddress(value){
      this.userResumeForm['_value'].jobsAddr = value;
      this.jobsAddr = value;
    }

    _submitUserResumeForm() {
      console.log(this.userResumeForm['_value']);
      // 本地存储简历信息。
      window.localStorage.setItem("resume_info", this.userResumeForm['_value']);
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
