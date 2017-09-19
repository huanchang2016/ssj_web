import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl }  from '@angular/forms';

@Component({
  selector: 'app-article-categories-edit',
  templateUrl: './article-categories-edit.component.html',
  styleUrls: ['./article-categories-edit.component.css']
})
export class ArticleCategoriesEditComponent implements OnInit {

  public articleCateForm : FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.articleCateForm = this.fb.group({
      name: null,
      describe: null,
      parent_id: null,
      order: null
    });
  }
  _submitForm(){
    console.log(this.articleCateForm['_value']);
  }

}
