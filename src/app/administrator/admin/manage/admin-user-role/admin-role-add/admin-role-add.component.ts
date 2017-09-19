import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({  
  selector: 'app-admin-role-add',
  templateUrl: './admin-role-add.component.html',
  styleUrls: ['./admin-role-add.component.css']
})
export class AdminRoleAddComponent implements OnInit {

  public permissionAddForm :FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.permissionAddForm = this.fb.group({
      name: null,
      display_name: null,
      description: null,
      permission1:[ null],
      permission2:[ null],
      permission3:[ null],
      permission4:[ null],
      permission5:[ null],
      permission6:[ null]
    });
  }

  _submitPerAddForm(){
    console.log(this.permissionAddForm['_value']);
  }
}
