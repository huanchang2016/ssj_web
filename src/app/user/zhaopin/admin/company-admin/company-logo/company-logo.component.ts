import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent implements OnInit {
  public upCompanLogoForm: FormGroup;
  // 设置默认图片地址
  public imgSrc: string = 'assets/com-images/14793403843.JPG';

  public comLogoUploader: FileUploader = new FileUploader({
    // 图片上传：参考链接(http://www.jianshu.com/p/0741186f60ab)
    url: "http://localhost:4200/assets/com-images/",//设置图片路径
    method: "POST",
    maxFileSize: 1
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // 初始化表单
    this.upCompanLogoForm = this.fb.group({
      companyLogoImage: ''
    })
  }

  // upLoadCompanyLogo($event) {
    // console.log($event.target.value);
    // console.log(this.comLogoUploader);
    // this.comLogoUploader.queue.forEach( event => {
    //   console.log(event);
    //   // this.imgSrc = event.url + event['some'].name;
    //   this.imgSrc = $event.target.value;
    // });
    // this.comLogoUploader.queue.forEach(event => {
      // event.upload();
      // this.imgSrc = event.url + event['some'].name;
    // });
  // }
  _submitCompanyLogoForm() {
    console.log("处理图片上传提交")
  }
  // 用js处理上传的图片
  upLoadCompanyLogo($event){
  var docObj = document.getElementById("doc");
  var imgObjPreview = document.getElementById("preview");
      console.log(docObj['files']);
      if (docObj['files'] && docObj['files'][0]) {
        imgObjPreview['src'] = window.URL.createObjectURL(docObj['files'][0]);
        
        // this.imgSrc = window.URL.createObjectURL(docObj['files'][0]);
        // console.log(this.imgSrc);
      }
      return true; 
    } 
  }

