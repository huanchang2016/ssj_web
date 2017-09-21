import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InRecruitJoblistService } from './../../../service/in-recruit-joblist.service';

@Component({
  selector: 'app-in-recruit',
  templateUrl: './in-recruit.component.html',
  styleUrls: ['./in-recruit.component.css']
})
export class InRecruitComponent implements OnInit {

  public searchConditions: string = '';//查询条件
  public _checked : Boolean = false;//是否选中
  public _checkBox: Array<any> = [
    {checked:'' },
    {checked:'' },
    {checked:'' },
    {checked:'' },
    {checked:'' },
  ];
  public checkedAll: Boolean = false;//是否全选
  public checkedBox: Array<any> = [];//将选中的内容添加到数组中

  public jobList = [];//正在招聘的职位信息

  constructor(
    private inRecruitJobs: InRecruitJoblistService,
    private route: Router
  ) { }

  ngOnInit() {
    this.showJobList();
  }
  // 职位展示
  showJobList(){
    var _jobList = JSON.parse(window.localStorage.getItem("inrecruitJobs"));
    if(_jobList){
      this.jobList = _jobList;
    }else{
      this.jobList = this.inRecruitJobs.getInRecruitJobList();
    }
    console.log(this.jobList);
    // 将所有正在招聘的职位暂存到本地
    window.localStorage.setItem('inrecruitJobs', JSON.stringify(this.jobList));
    this.jobList.forEach( res => {
      if(new Date(res.releaseDate) < new Date()){
        res.jobStatus = '招聘中';
      }else{
        res.jobStatus = '已过期';
      }
      res.checked = false;
    });
  }

  amendJobInfo(jobsId){
    // 将要修改的职位保存到本地
    var amendJobInfo = this.inRecruitJobs.findAmendJobInfo(jobsId);
    console.log(amendJobInfo);
    window.localStorage.setItem('amendJobInfo', JSON.stringify(amendJobInfo));
    //导航到职位发布界面编辑职位
    var _url = '/companyAdmin/com-jobadd/edit/';
    var url = _url + jobsId;
    this.route.navigateByUrl(url);
  }

  addCheckedJobs($event){
    this.checkedBox = this._checkBox;
    console.log(this._checkBox);
  }
  // 全选状态
  checkedAllJobs(value){
    this._checkBox.forEach( el =>{
      el.checked  = value;
    });
  }

  // 刷新当前页面
  reloadPage(jobId){
    JSON.parse(window.localStorage.getItem('inrecruitJobs')).forEach((arr , i , array) => {
      if( jobId === arr.jobId){
        arr.updateDate = (new Date()).getFullYear() + "-" + ((new Date()).getMonth() + 1) + "-" + (new Date()).getDate();
        array.splice(i, 1, arr);
        window.localStorage.setItem("inrecruitJobs", JSON.stringify(array));
        this.showJobList();
      }
    });
  }
  deleteJob(jobId){
    JSON.parse(window.localStorage.getItem('inrecruitJobs')).forEach((arr , i , array) => {
      if( jobId === arr.jobId){
        array.splice(i, 1);
        window.localStorage.setItem("inrecruitJobs", JSON.stringify(array));
        this.showJobList();
      }
    });
  }
}
