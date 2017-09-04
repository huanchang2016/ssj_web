import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  changePwdForm: FormGroup;
  @Input()
  userTypes;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.changePwdForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      checkNewPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  _submitForm() {
    if(this.userTypes === '单位用户'){
      console.log(this.userTypes);
      console.log(this.changePwdForm.value);
    }
    if(this.userTypes === '个人用户'){
      console.log(this.userTypes);
      console.log(this.changePwdForm.value);
    }
    
    for (const i in this.changePwdForm.controls) {
      this.changePwdForm.controls[i].markAsDirty();
    }
  }


  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.changePwdForm.controls['checkNewPassword'].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.changePwdForm.controls['newPassword'].value) {
      return { confirm: true, error: true };
    }
  };

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }


  getFormControl(name) {
    return this.changePwdForm.controls[name];
  }

}
