import { NzModalSubject } from 'ng-zorro-antd';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

import { LoginService }   from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public validateForm: FormGroup;
    
  
    constructor(
      private fb: FormBuilder,
      private subject: NzModalSubject,
      private loginService : LoginService
    ) {
      this.subject.on('onDestory', () => {
        console.log('destroy');
      });
    }
  
  
  _name: string;
  
    @Input()
    // set name(){} 方法，指向父组件(head-top.component.ts)中 componentParams的配置的参数；
    //     如： set age(){} ,就是对应到componentParams的属性为age的参数
    set name(value: string) {
      this._name = value;
    }

    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ true ]
      });
    }
    _submitForm() {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
        // console.log(this.validateForm.controls[ i ].value);//各个表单内容的值
      }
      var option = this.validateForm['value'];
      console.log(option);
      this.loginService.test(option);
    }


}
