import { Component, OnInit } from '@angular/core';

declare var $;

const jobs = [
  {jobClass:'fsdafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'dsdfasdfs',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsddfsadfsdfafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsdafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'dsdfasdfs',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsddfsadfsdfafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'dsdfasdfs',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsddfsadfsdfafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsdafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]},
  {jobClass:'fsddfsadfsdfafsdfaasd',jobList: ["职位1", "职位2","职位1", "职位2","职位1", "职位2","职位1", "职位2"]}
]
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
