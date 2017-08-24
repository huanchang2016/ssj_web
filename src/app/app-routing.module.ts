import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './user/home/home.component';
import { ZhaopinComponent }   from './user/zhaopin/zhaopin.component';
import { JobsDetailComponent } from './user/zhaopin/jobs-detail/jobs-detail.component';
import { CompanyComponent } from './user/zhaopin/company/company.component';
import { CompanyHomeComponent } from './user/zhaopin/company/company-home/company-home.component';
import { CompanyJobsComponent } from './user/zhaopin/company/company-jobs/company-jobs.component';
import { SchoolRecruitComponent } from './user/zhaopin/company/school-recruit/school-recruit.component';
import { CompanyAskComponent } from './user/zhaopin/company/company-ask/company-ask.component';

const routes: Routes = [
  { path: '', redirectTo: 'zhaopin', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: '天府菁英网' }},
  { path: 'zhaopin', component: ZhaopinComponent, data: { title: '天府新区管委会招聘信息-天府菁英网' } },
  { path: "jobsDetails/:jobId", component: JobsDetailComponent, data: {title: "个人简历详情-天府新区管委会招聘信息"}},
  { path: "company/:companyId", component: CompanyComponent, data: { title: "公司详情-天府新区管委会招聘信息"},
        children:[
          { path: '', component: CompanyHomeComponent},
          { path: 'home', component: CompanyHomeComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
          { path: 'jobs', component: CompanyJobsComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
          { path: 'recruit', component: SchoolRecruitComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
          { path: 'ask', component: CompanyAskComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}}

  ]},
  { path: "**", component: HomeComponent, data: { title: '天府菁英网-首页' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
