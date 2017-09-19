import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-aritcle-edit',
  templateUrl: './aritcle-edit.component.html',
  styleUrls: ['./aritcle-edit.component.css']
})
export class AritcleEditComponent implements OnInit {

  public articleFormGroup :FormGroup ;
  public ckeditorContent = '';
  config = {
      filebrowserBrowseUrl: '&&&&&',  
      filebrowserUploadUrl: '&&&'
  };
  constructor(
    private fb : FormBuilder
  ){
    this.ckeditorContent = `<p>新闻内容</p>`;    
  }

  ngOnInit() {
    this.articleFormGroup = this.fb.group({
      name: null,
      category_id: null,
      author: null, 
      source: null,
      abstract: null,
      file: null,
      ckeditorContent: null,
      order: null
    })
  }

  onChange(value){console.log(value);}//在500ms延迟后，
  onReady(value){console.log(value);}
  onFocus(value){console.log(value);}
  onBlur(value){console.log(value);}

  _submit(){
    console.log(this.articleFormGroup['_value']);
  }

}
