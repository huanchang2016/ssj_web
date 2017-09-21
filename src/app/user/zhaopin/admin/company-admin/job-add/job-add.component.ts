import { Component, OnInit } from '@angular/core';
import { InRecruitJoblistService } from './../../../service/in-recruit-joblist.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {

  public editJobInfo = false;

  //正在招聘的职位
  public InRecruitJobList = [];

  constructor(
    private inRecruitJob: InRecruitJoblistService
  ) { }
  
  ngOnInit() {
    var inJobList = JSON.parse(window.localStorage.getItem("inrecruitJobs"));
    if(inJobList){
      this.InRecruitJobList = inJobList;
    }else{
      this.InRecruitJobList  = this.inRecruitJob.getInRecruitJobList();
    }
  }
  
  getFormValue(value){
    console.log(value);
    var nowTime = new Date();
    var releaseTime = new Date(value.releaseDate);
    value.updateDate = nowTime.getFullYear() + "-" + (nowTime.getMonth() + 1) + "-" + (nowTime.getDate());
    value.releaseDate = releaseTime.getFullYear() + "-" + (releaseTime.getMonth() + 1) + "-" + (releaseTime.getDate());
    this.InRecruitJobList.push(value);
    window.localStorage.setItem("inrecruitJobs", JSON.stringify(this.InRecruitJobList));
  }
}
