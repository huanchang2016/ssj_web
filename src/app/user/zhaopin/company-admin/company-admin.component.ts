import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.css']
})
export class CompanyAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// 如果需要点击后所有列表都展开，请将下面的代码注释
  // isOpenOne = true;
  // isOpenTwo = false;
  // isOpenThree = false;

  // openChange(value) {
  //   if (value === 'one') {
  //     this.isOpenTwo = false;
  //     this.isOpenThree = false;
  //   } else if (value === 'two') {
  //     this.isOpenOne = false;
  //     this.isOpenThree = false;
  //   } else if (value === 'three') {
  //     this.isOpenOne = false;
  //     this.isOpenTwo = false;
  //   }
  // }
  // 如果需要点击后所有列表都展开，请将上面的代码注释

}
