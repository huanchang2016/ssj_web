import { Component, OnInit } from '@angular/core';

import { JobListService } from './../job-list.service';

@Component({
  selector: 'jobs-show',
  templateUrl: './jobs-show.component.html',
  styleUrls: ['./jobs-show.component.css']
})
export class JobsShowComponent implements OnInit {

  public jobsListDetails;
  constructor(
    public jobList : JobListService,
  ) { }

  ngOnInit() {
    this.jobsListDetails = this.jobList.getJobsDetail();
  }
}
