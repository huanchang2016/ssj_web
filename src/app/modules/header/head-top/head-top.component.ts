import { LoginComponent } from './../../login/login.component';
import { NzModalService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { Router }     from '@angular/router';

@Component({
  selector: 'header-top',
  templateUrl: './head-top.component.html',
  styleUrls: ['./head-top.component.css']
})
export class HeadTopComponent implements OnInit {

  public phoneNumber: string = '028-80518071';

  constructor(
    private modalService: NzModalService,
    private route: Router
  ) { }

  ngOnInit() {
    // console.log(this.modalService);
  }

  showModalForLoginComponent() {
    const subscription = this.modalService.open({
      title          : '登录框',
      content        : LoginComponent,
      wrapClassName  : 'login-box',
      footer         : false,
      onOk() {
        // console.log('onOk');
      },
      onCancel() {
        // console.log('Click cancel');
      },
      componentParams: {
        name: '测试渲染Component1'
      }
    });
    subscription.subscribe(result => {
      // console.log(result);
    })
  }

  showModalForRegistComponent(){
      this.route.navigateByUrl('/register');
  }

}
