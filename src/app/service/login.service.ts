import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs';

@Injectable()
export class LoginService {

  public headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });

  constructor(
    private http: Http,
    private route: Router
  ) { }

  test(opt){
    let _url = 'http://www.cdtfhr.com/index/Index/apiTest';//测试地址
    
    let options = new RequestOptions({ headers: this.headers });
    
    this.http.post(_url, JSON.stringify(opt), options).subscribe(function (data) {
    
    console.log(data)
    
    })

  }

  navTo(url){
    this.route.navigateByUrl(url);
  }

}
