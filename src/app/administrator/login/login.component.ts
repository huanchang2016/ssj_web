import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  loginIn(username, password){
    console.log(username, password);
    this.route.navigateByUrl('/administrator/dash');
  }

}
