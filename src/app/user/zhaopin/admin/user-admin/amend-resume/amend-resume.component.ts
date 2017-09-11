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
  public isWorkExp:Boolean;
  
  controlArray = [];
  // 设置默认经历预览
  public deWorkExp = {
    _date: '2009年9月10号 - 2019年9月10号',
    companyName: "XXX有限公司",
    position: '产品研发',
    content:[
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
    if(this.workExp.length === 0 ){
      this.isWorkExp = false;
    }else{this.isWorkExp = true;}

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

  //存储时间参数
  public star_d;
  public end_d;
  _submitForm() {
    this.isWorkExp = true;
    this.workExpForm['_value'].startDate = this.star_d;
    this.workExpForm['_value'].endDate = this.end_d;
    this.workExpForm['_value'].content =( this.workExpForm['_value'].content).split("\n");
    this.workExp.push(this.workExpForm['_value']);
    console.log(this.workExpForm['_value']);
  }

  // 处理起始时间的处理
  getWorkDate(value){
    const start_date = new Date(value._startDate);
    const end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "-" + start_date.getMonth() + "-" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "-" + end_date.getMonth()  + "-" + end_date.getDate();
    this.star_d = s_d;
    this.end_d = e_d;
    this.workExpForm['_value'].startDate = s_d;
    this.workExpForm['_value'].endDate = e_d;
  }

}
