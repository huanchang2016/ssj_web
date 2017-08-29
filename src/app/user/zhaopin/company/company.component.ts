import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companyIsChecked = false;//公司是否认证

  
  constructor() { }

  ngOnInit() {
    
  }

}
