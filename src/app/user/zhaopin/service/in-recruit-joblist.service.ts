import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { InRecruitJobList } from "../job-list/in-recruit-joblist";

@Injectable()
export class InRecruitJoblistService {

  constructor(
    private route: Router
  ) { }

  getInRecruitJobList(){
    return InRecruitJobList;
  }

  public editJobs;
  findAmendJobInfo(_id){
    InRecruitJobList.forEach( res => {
      if(res.jobId === _id){
        this.editJobs = res;
      }
    });
    return this.editJobs;
  }
}
