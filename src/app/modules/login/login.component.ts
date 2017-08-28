import { NzModalSubject } from 'ng-zorro-antd';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public validateForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private subject: NzModalSubject
    ) {
      this.subject.on('onDestory', () => {
        console.log('destroy');
      });
    }
  
  
  _name: string;
  _age :string;
  
    @Input()
    // set name(){} 方法，指向父组件(head-top.component.ts)中 componentParams的配置的参数；
    //     如： set age(){} ,就是对应到componentParams的属性为age的参数
    set _title(value: string) {
      this._name = value;
    }

    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ '用户名', [ Validators.required ] ],//Validators.pattern('^...+$')自定义正则验证;
        password: [ null, [ Validators.required ] ],
        remember: [ true ],
      });
    }
    _submitForm($event, value) {
      $event.preventDefault();//阻止表单元素的默认事件
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
      console.log(value);//表单元素的各个值
    }

}
