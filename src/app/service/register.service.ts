import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router }   from '@angular/router';

@Injectable()
export class RegisterService {

  constructor(
    private http: Http,
    private route: Router
  ) { }

  registeEnd(option){
    console.log(option);
    if(option.select == 'company'){
      this.route.navigateByUrl('/companyAdmin');
    }else if(option.select == 'person'){
      this.route.navigateByUrl('/userAdmin');
    }
  }

}
