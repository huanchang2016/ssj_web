import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CompanyRecruit } from './../job-list/jobs-list';


@Injectable()
export class JobListService {

  constructor(
    public router: Router
  ) { }

  getJobsDetail(){
    return CompanyRecruit;
  }

  getJobDetailInfo( findJobId: string):void{
    var currentJobInfo;
    for(let i=0,l=CompanyRecruit.length;i<l;i++){
      if(CompanyRecruit[i].jobId === findJobId){
        currentJobInfo = CompanyRecruit[i];
        return currentJobInfo;
      }
    }
    if(!currentJobInfo){
      // 如果没有找到对应的职位详情，那么将重定向到指定路由
      this.router.navigate(['/xxx']);
    }
  }

}
