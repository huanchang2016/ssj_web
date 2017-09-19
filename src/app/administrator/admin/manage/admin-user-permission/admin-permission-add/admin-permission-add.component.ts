import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-permission-add',
  templateUrl: './admin-permission-add.component.html',
  styleUrls: ['./admin-permission-add.component.css']
})
export class AdminPermissionAddComponent implements OnInit {
  public roleAddForm :FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.roleAddForm = this.fb.group({
      name: null,
      display_name: null,
      description: null
    });
  }

  _submitRoleForm(){
    console.log(this.roleAddForm['_value']);
  }

}