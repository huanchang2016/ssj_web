import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title }  from '@angular/platform-browser';

// 服务
import { JobListService } from './user/zhaopin/job-list.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobListService]
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    public activatedRoute : ActivatedRoute,
    public title : Title
  ) { }

  ngOnInit() {
    this.router.events
        .filter( event => event instanceof NavigationEnd )
        .map( ()=> this.activatedRoute)
        .map( route =>{
          while(route.firstChild){ route = route.firstChild;}
          return route;
        })
        .filter( route => route.outlet === 'primary')
        .mergeMap(route => route.data)
        .subscribe( (event) => this.title.setTitle(event['title']));
  }
}
