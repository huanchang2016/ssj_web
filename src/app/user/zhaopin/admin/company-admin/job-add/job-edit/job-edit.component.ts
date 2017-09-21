import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  public editJobInfo = true;
  constructor() { }
  
  ngOnInit() {
  }

  getFormValue(value){
    console.log(value);
  }
}
