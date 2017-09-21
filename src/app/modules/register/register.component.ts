import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { RegisterService} from './../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeForm: FormGroup;
  
   
  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private regService: RegisterService
  ) { }
  
    ngOnInit() {
      this.registeForm = this.fb.group({
        select           : [ null, [ Validators.required ] ],
        userName         : [ null, [ Validators.required ]],
        email            : [ null, [ Validators.required, Validators.pattern('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$') ] ],
        password         : [ null, [ Validators.required ] ],
        checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
        phoneNumber      : [ null, [ Validators.required, Validators.pattern('^0?(13|14|15|18)[0-9]{9}$') ] ],
        agree            : [ true ]
      });
    }

    get isHorizontal() {
      return this.registeForm.controls[ 'formLayout' ] && this.registeForm.controls[ 'formLayout' ].value === 'horizontal';
    }
  
    getFormControl(name) {
      return this.registeForm.controls[ name ];
    }
    
    _submitForm() {
      for (const i in this.registeForm.controls) {
        this.registeForm.controls[ i ].markAsDirty();
        // console.log(this.registeForm.controls[ i ].value);//该注册表单的值
      }
      // 登录成功后跳转到个人中心(判断注册的是个人用户还是单位用户),调用注册服务判断
      window.localStorage.setItem('loginInfo', JSON.stringify(this.registeForm['_value']));
      this.regService.registeEnd(this.registeForm['_value']);
    }
  
  
    updateConfirmValidator() {
      /** wait for refresh value */
      setTimeout(_ => {
        this.registeForm.controls[ 'checkPassword' ].updateValueAndValidity();
      });
    }
  
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.registeForm.controls[ 'password' ].value) {
        return { confirm: true, error: true };
      }
    };
  
    getCaptcha(e: MouseEvent) {
      e.preventDefault();
    }

}
