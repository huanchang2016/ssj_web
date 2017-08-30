import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent implements OnInit {

  companyLogoForm : FormGroup;
  // 文件上传初始化
  public comImguploader: FileUploader = new FileUploader({
    url: "http://localhost:4200/assets/com-images/",
    method: "POST",
    maxFileSize: 1024
  });

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.companyLogoForm = this.fb.group({
      companyLogoImg: [null]
    });
  }

  _upLoadCompanyLogo(){
    for (const i in this.companyLogoForm.controls) {
      this.companyLogoForm.controls[i].markAsDirty();
    }
  }

  getCompanyLogo($event){
    console.log(this.comImguploader);
  }
}
