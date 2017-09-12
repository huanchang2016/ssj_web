import { Component, OnInit } from '@angular/core';

declare var $;

const jobs = [
  {jobClass:'度假/旅游/出入境服务',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'生产管理/营运 ',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'烹饪/料理/食品研发',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'度假/旅游/出入境服务',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'电子/电器/半导体/仪器仪表',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'烹饪/料理/食品研发',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'度假/旅游/出入境服务',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsddfsadfsdfafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'度假/旅游/出入境服务',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'生产管理/营运 ',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public jobsList = jobs;
  constructor() { }

  ngOnInit() {
  }


  jobListShow(){
      $(".jobs_menu").hover(function(){
      $(this).find('.jobs-list').show();
      $(".jobs-list").css({left:$(this).width() - 1, top: -1})
    }, function(){
      $(this).find('.jobs-list').hide();
    })
  }
  
}
