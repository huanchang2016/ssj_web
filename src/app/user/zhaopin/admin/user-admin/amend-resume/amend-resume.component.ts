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
  validateForm: FormGroup;
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

    this.validateForm = this.fb.group({});
    this.addField();
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
    const id = (this.controlArray.length > 0) ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

    //每个表单的内容
    const _form = {
      id,
      controlInstance: `companyName${id}`,
      position: `position${id}`,
      startDate: `startDate${id}`,
      endDate: `endDate${id}`,
      content: `content${id}`
      
    };
    const index = this.controlArray.push(_form);
    // console.log(this.controlArray[this.controlArray.length - 1]);
    console.log(this.controlArray);
    this.validateForm.addControl(this.controlArray[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    console.log(this.validateForm.value);
  }

}
