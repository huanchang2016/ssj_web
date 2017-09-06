import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amend-resume',
  templateUrl: './amend-resume.component.html',
  styleUrls: ['./amend-resume.component.css']
})
export class AmendResumeComponent implements OnInit {

  public workExpForm: FormGroup;//工作经历表单
  public workExp = [];// 工作经历数组
  
  controlArray = [];
  // 设置默认经历预览
  public deWorkExp = {
    _date: '2009年9月10号 - 2019年9月10号',
    companyName: "XXX有限公司",
    jobName: '产品研发',
    works:[
            "主导XXX的版本迭代，并负责主要需求，协调开发、设计资源，推动项目进度，保证产品质量，打磨细节体验",
            "参与讨论及制订XXX的各版本需求，根据行业热点及用户反馈，提出有效的产品方案",
            "负责版本上线后的推广工作，通过官方网站和论坛等渠道将新功能触达用户",
            "跟进用户反馈并分析数据，持续优化已有功能"
          ]
  };


  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.workExp);
    if(this.workExp.length == 0){
      this.workExp.push(this.deWorkExp);
      console.log(this.workExp);
    }

    this.workExpForm = this.fb.group({
      companyName: [null,[Validators.required]],
      position: [ null],
      startDate: [null],
      endDate: [null],
      content: [null]
    });
  }
  isAddWorksExp = false;//如果添加工作经历，则模态框弹出
  isConfirmLoading = false;

  showModal = () => {
    this.isAddWorksExp = true;
  }

  handleOk = (e) => {
    // 确认时提交表单
    this._submitForm();

    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isAddWorksExp = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel = (e) => {
    this.isAddWorksExp = false;
  }


  addField(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    console.log('addForm');
    
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      
    }
  }

  getFormControl(name) {
    return this.workExpForm.controls[name];
  }

  _submitForm() {
    console.log(this.workExpForm['_value']);
  }

  // 处理起始时间的处理
  getWorkDate(value){
    this.workExpForm['_value'].startDate = value._startDate;
    this.workExpForm['_value'].endDate = value._endDate;
  }

}
