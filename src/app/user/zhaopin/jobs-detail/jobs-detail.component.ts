import { JobListService } from './../job-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $;

@Component({
  selector: 'jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {
// 是否收藏该职位
  public isCollect:boolean = false;
  public jobDetail;
  public similarJobList;

  constructor(
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public jobListService: JobListService
  ) { }

  ngOnInit() {
    // 获取当前职位详情
    var jobId;
    this.activatedRoute.params.subscribe(params => {
      jobId = params['jobId'];
    });
    this.jobDetail = this.jobListService.getJobDetailInfo(jobId);
    // 获取相似职位详情信息
    this.similarJobList = this.jobListService.getJobsDetail();
  }

  // 收藏按钮样式更换
  collect = (value) => {
    this.isCollect = !this.isCollect;
    if(this.isCollect){
      $(".jobDetailR-top").find("i.anticon").attr("class", "anticon anticon-star");
    }else{ 
      $(".jobDetailR-top").find("i.anticon").attr("class", "anticon anticon-star-o");
    }
  }

}
