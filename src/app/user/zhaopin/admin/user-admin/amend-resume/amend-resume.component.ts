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
  public isAddWorksExp = false;//如果添加工作经历，则模态框弹出
  public workExp = [];// 工作经历数组
  public isWorkExp:Boolean;

  public pxExpForm: FormGroup;//培训经历表单
  public isAddPxExp = false;//如果添加培训经历，则模态框弹出
  public pxExp = [];// 培训经历数组
  public isPxExp:Boolean;

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
    // 关闭当前模态框表单
      this[res] = false;
      if(res == 'isAddWorksExp'){ this.workExpFormAdd();}
      if(res == 'isAddPxExp'){ this.pxExpFormAdd();}
      if(res == 'isAddStudyExp'){ this.studyExpFormAdd();}
     
  }

  handleCancel = (e, res) => {
    this[res] = false;
  }

  //时间中转参数
  public workStar_d;
  public workEnd_d;
  public pxStar_d;
  public pxEnd_d;
  public studyStar_d;
  public studyEnd_d;

  // 将新增的工作经验、学历、培训经历等内容添加到数组中
  workExpFormAdd() {
    this.isWorkExp = true;
    this.workExpForm['_value'].startDate = this.workStar_d;
    this.workExpForm['_value'].endDate = this.workEnd_d;
    this.workExpForm['_value'].content =( this.workExpForm['_value'].content).split("\n");
    this.workExp.push(this.workExpForm['_value']);
    console.log(this.workExpForm['_value']);
  }
  pxExpFormAdd() {
    this.isPxExp = true;
    this.pxExpForm['_value'].startDate = this.pxStar_d;
    this.pxExpForm['_value'].endDate = this.pxEnd_d;
    this.pxExpForm['_value'].content =( this.pxExpForm['_value'].content).split("\n");
    this.pxExp.push(this.pxExpForm['_value']);
    console.log(this.pxExpForm['_value']);
    console.log(this.pxExp);
  }
  studyExpFormAdd() {
    this.isStudyExp = true;
    this.studyExpForm['_value'].startDate = this.studyStar_d;
    this.studyExpForm['_value'].endDate = this.studyEnd_d;
    this.studyExp.push(this.studyExpForm['_value']);
    console.log(this.studyExpForm['_value']);
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



  // 当所有的表单都编辑修改后点击保存，统一提交
  _save(){
    // 确认时提交表单
    this.workExpFormAdd();
  }
}
