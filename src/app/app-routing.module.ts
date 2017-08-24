import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './user/home/home.component';
import { ZhaopinComponent }   from './user/zhaopin/zhaopin.component';
import { JobsDetailComponent } from './user/zhaopin/jobs-detail/jobs-detail.component';
import { CompanyComponent } from './user/zhaopin/company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'zhaopin', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: '天府菁英网' }},
  { path: 'zhaopin', component: ZhaopinComponent, data: { title: '天府新区管委会招聘信息-天府菁英网' } },
  { path: "jobsDetails/:jobId", component: JobsDetailComponent, data: {title: "个人简历详情-天府新区管委会招聘信息"}},
  { path: "company/:companyId", component: CompanyComponent, data: { title: "公司详情-天府新区管委会招聘信息"}},
  { path: "**", component: HomeComponent, data: { title: '天府菁英网-首页' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
