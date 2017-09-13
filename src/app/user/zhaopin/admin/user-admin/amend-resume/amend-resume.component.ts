import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amend-resume',
  templateUrl: './amend-resume.component.html',
  styleUrls: ['./amend-resume.component.css']
})
export class AmendResumeComponent implements OnInit {

  // 模态框

  public workExpForm: FormGroup;//工作经历表单
  public isAddWorksExp = false;//如果添加工作经历，则模态框弹出
  public workExp = [];// 工作经历数组
  public isWorkExp:Boolean;

  public studyExpForm: FormGroup;//学习经历表单
  public isAddStudyExp = false;// 教育经历
  public studyExp = [];//学习经历数组
  public isStudyExp: Boolean;
  

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

  }
  
  showModal = (res) => {
    this[res] = true;
  }

  handleOk = (e, res) => {
      this[res] = false;
      if(res == 'isAddWorksExp'){ this.workExpFormAdd();}
      if(res == 'isAddStudyExp'){ this.studyExpFormAdd();}
     
  }

  handleCancel = (e, res) => {
    this[res] = false;
  }


  getFormControl(name) {
    return this.workExpForm.controls[name];
  }

  //存储时间参数
  public workStar_d;
  public workEnd_d;
  public studyStar_d;
  public studyEnd_d;

  workExpFormAdd() {
    this.isWorkExp = true;
    this.workExpForm['_value'].startDate = this.workStar_d;
    this.workExpForm['_value'].endDate = this.workEnd_d;
    this.workExpForm['_value'].content =( this.workExpForm['_value'].content).split("\n");
    this.workExp.push(this.workExpForm['_value']);
    console.log(this.workExpForm['_value']);
  }
  studyExpFormAdd() {
    this.isStudyExp = true;
    this.studyExpForm['_value'].startDate = this.studyStar_d;
    this.studyExpForm['_value'].endDate = this.studyEnd_d;
    this.studyExp.push(this.studyExpForm['_value']);
    console.log(this.studyExpForm['_value']);
  }

  // 当所有的表单都编辑修改后点击保存，统一提交
  _save(){
    // 确认时提交表单
    this.workExpFormAdd();
  }

  // 处理起始时间的处理
  getWorkDate(value){
    let start_date = new Date(value._startDate);
    let end_date = new Date(value._endDate);
    let s_d = start_date.getFullYear()+ "/" + start_date.getMonth() + "/" + start_date.getDate();
    let e_d = end_date.getFullYear()+ "/" + end_date.getMonth()  + "/" + end_date.getDate();
    this.workStar_d = s_d;
    this.workEnd_d = e_d;
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

}
