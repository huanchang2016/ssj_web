import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup;
  
   
  constructor(
    private fb: FormBuilder, 
    private route: Router
  ) { }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
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
      return this.validateForm.controls[ 'formLayout' ] && this.validateForm.controls[ 'formLayout' ].value === 'horizontal';
    }
  
    getFormControl(name) {
      return this.validateForm.controls[ name ];
    }
    
    _submitForm() {
      
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
        // console.log(this.validateForm.controls[ i ].value);//该注册表单的值
      }
      // 登录成功后跳转到个人中心(判断注册的是个人用户还是单位用户)
      if( this.validateForm.controls['select'].value == 'company'){
        this.route.navigateByUrl('/companyAdmin');
      }else if( this.validateForm.controls['select'].value == 'person'){
        this.route.navigateByUrl('/user_index');
      }
      

    }
  
  
    updateConfirmValidator() {
      /** wait for refresh value */
      setTimeout(_ => {
        this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
      });
    }
  
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
        return { confirm: true, error: true };
      }
    };
  
    getCaptcha(e: MouseEvent) {
      e.preventDefault();
    }

}
