import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {

  public adminUserAddForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.adminUserAddForm = this.fb.group({
      name: null,
      email: null,
      password: null,
      password_confirmation:null,
      role_id: null
    });
  }

  _submitAddUser(){
    console.log(this.adminUserAddForm['_value']);
  }
}
