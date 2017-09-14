import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amend-resume',
  templateUrl: './amend-resume.component.html',
  styleUrls: ['./amend-resume.component.css']
})
export class AmendResumeComponent implements OnInit {

  // 模态框表单

  public workExpForm: FormGroup;//工作经历表单
  public isAddWorksExp = false;//如果添加工作经历，
  public workExp = [];// 工作经历数组
  public isWorkExp:Boolean;

  public pxExpForm: FormGroup;//培训经历表单
  public isAddPxExp = false;//如果添加培训经历，则模态框弹出
  public pxExp = [];// 培训经历数组
  public isPxExp:Boolean;


  public proExpForm: FormGroup;//项目经历表单
  public isAddProExp = false;//如果添加项目经历，则模态框弹出
  public proExp = [];// 项目经历数组
  public isProExp:Boolean;

  public studyExpForm: FormGroup;//学习经历表单
  public isAddStudyExp = false;// 教育经历
  public studyExp = [];//学习经历数组
  public isStudyExp: Boolean;

  public otherExpForm: FormGroup;//其他信息经历表单
  public isAddOtherExp = false;// 其他信息
  public otherExp = [];//其他信息数组
  public isOtherExp: Boolean;

  public selfExpForm: FormGroup;//自我评价经历表单
  public isAddSelfExp = false;// 自我评价
  public selfExp = [];//自我评价数组
  public isSelfExp: Boolean;
  

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    // 工作经历
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

    // 培训经历
    if(this.pxExp.length === 0 ){
      this.isPxExp = false;
    }else{this.isPxExp = true;}

    this.pxExpForm = this.fb.group({
      companyName: [null,[Validators.required]],
      position: [ null],
      startDate: [null],
      endDate: [null],
      content: [null]
    });

    // 项目经验
    if(this.proExp.length === 0 ){
      this.isProExp = false;
    }else{this.isProExp = true;}

    this.proExpForm = this.fb.group({
      projectName: [null,[Validators.required]],
      position: [ null],
      startDate: [null],
      endDate: [null],
      content: [null]
    });

    // 学习经历
    if(this.studyExp.length === 0 ){
      this.isStudyExp = false;
    }else{this.isStudyExp = true;}
    
    this.studyExpForm = this.fb.group({
      schoolName: [null,[Validators.required]],
      majors: [ null],
      startDate: [null],
      endDate: [null],
      education: [null]
    });

    // 其他信息
    if(this.otherExp.length === 0 ){
      this.isOtherExp = false;
    }else{this.isOtherExp = true;}
    
    this.otherExpForm = this.fb.group({
      title: [null,[Validators.required]],
      content: [ null]
    });

    // 自我评价
    if(this.selfExp.length === 0 ){
      this.isSelfExp = false;
    }else{this.isSelfExp = true;}
    
    this.selfExpForm = this.fb.group({
      content: [ null]
    });

  }
  
  
  showModal = (res) => {
    this[res] = true;
  }

  handleOk = (e, res) => {
    // 关闭当前模态框表单
      this[res] = false;
      if(res == 'isAddWorksExp'){ this.workExpFormAdd();}
      if(res == 'isAddPxExp'){ this.pxExpFormAdd();}
      if(res == 'isAddStudyExp'){ this.studyExpFormAdd();}
      if(res == 'isAddProExp'){ this.proExpFormAdd();}
      if(res == 'isAddOtherExp'){this.otherExpFormAdd();}
      if(res == 'isAddSelfExp'){this.selfExpFormAdd();}
    
     
  }

  handleCancel = (e, res) => {
    this[res] = false;
  }

  //时间中转参数
  public workStar_d;
  public workEnd_d;
  public pxStar_d;
  public pxEnd_d;
  public proStar_d;
  public proEnd_d;
  public studyStar_d;
  public studyEnd_d;

  // 将新增的工作经验、学历、培训经历等内容添加到数组中
  workExpFormAdd() {
    this.isWorkExp = true;
    this.workExpForm['_value'].startDate = this.workStar_d;
    this.workExpForm['_value'].endDate = this.workEnd_d;
    if(this.workExpForm['_value'].content){
      this.workExpForm['_value'].content =( this.workExpForm['_value'].content).split("\n");
    }
    this.workExp.push(this.workExpForm['_value']);
    console.log(this.workExpForm['_value']);
  }
  pxExpFormAdd() {
    this.isPxExp = true;
    this.pxExpForm['_value'].startDate = this.pxStar_d;
    this.pxExpForm['_value'].endDate = this.pxEnd_d;
    if(this.pxExpForm['_value'].content){
      this.pxExpForm['_value'].content =( this.pxExpForm['_value'].content).split("\n");
    }
    this.pxExp.push(this.pxExpForm['_value']);
    console.log(this.pxExpForm['_value']);
  }
  proExpFormAdd() {
    this.isProExp = true;
    this.proExpForm['_value'].startDate = this.proStar_d;
    this.proExpForm['_value'].endDate = this.proEnd_d;
    if(this.proExpForm['_value'].content){
      this.proExpForm['_value'].content =( this.proExpForm['_value'].content).split("\n");
    }
    this.proExp.push(this.proExpForm['_value']);
    console.log(this.proExpForm['_value']);
  }
  studyExpFormAdd() {
    this.isStudyExp = true;
    this.studyExpForm['_value'].startDate = this.studyStar_d;
    this.studyExpForm['_value'].endDate = this.studyEnd_d;
    this.studyExp.push(this.studyExpForm['_value']);
    console.log(this.studyExpForm['_value']);
  }
  otherExpFormAdd() {
    this.isOtherExp = true;
    if(this.otherExpForm['_value'].content){
      this.otherExpForm['_value'].content =( this.otherExpForm['_value'].content).split("\n");
    }
    this.otherExp.push(this.otherExpForm['_value']);
    console.log(this.otherExpForm['_value']);
  }
  selfExpFormAdd() {
    this.isSelfExp = true;
    if(this.selfExpForm['_value'].content){
      this.selfExpForm['_value'].content =( this.selfExpForm['_value'].content).split("\n");
    }
    this.selfExp.push(this.selfExpForm['_value']);
    console.log(this.selfExpForm['_value']);
  }


  // 将子组件传递过来的时间进行处理
  getWorkDate(value){
    let start_date = new Date(value._startDate);
    let end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "/" + start_date.getMonth() + "/" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "/" + end_date.getMonth()  + "/" + end_date.getDate();
    this.workStar_d = s_d;
    this.workEnd_d = e_d;
  }
  getPxDate(value){
    let start_date = new Date(value._startDate);
    let end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "/" + start_date.getMonth() + "/" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "/" + end_date.getMonth()  + "/" + end_date.getDate();
    this.pxStar_d = s_d;
    this.pxEnd_d = e_d;
  }
  getProDate(value){
    let start_date = new Date(value._startDate);
    let end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "/" + start_date.getMonth() + "/" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "/" + end_date.getMonth()  + "/" + end_date.getDate();
    this.proStar_d = s_d;
    this.proEnd_d = e_d;
  }
  getStudykDate(value){
    let start_date = new Date(value._startDate);
    let end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "-" + start_date.getMonth() + "-" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "-" + end_date.getMonth()  + "-" + end_date.getDate();
    this.studyStar_d = s_d;
    this.studyEnd_d = e_d;
    this.studyExpForm['_value'].startDate = s_d;
    this.studyExpForm['_value'].endDate = e_d;
  }



  // 当所有的表单都编辑修改后点击保存，统一提交
  _save(){
    // 确认时提交表单
    this.workExpFormAdd();
  }
}
