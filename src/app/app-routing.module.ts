import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './user/home/home.component';
import { ZhaopinComponent } from './user/zhaopin/zhaopin.component';
import { JobsDetailComponent } from './user/zhaopin/jobs-detail/jobs-detail.component';
import { CompanyComponent } from './user/zhaopin/company/company.component';
import { CompanyHomeComponent } from './user/zhaopin/company/company-home/company-home.component';
import { CompanyJobsComponent } from './user/zhaopin/company/company-jobs/company-jobs.component';
import { SchoolRecruitComponent } from './user/zhaopin/company/school-recruit/school-recruit.component';
import { CompanyAskComponent } from './user/zhaopin/company/company-ask/company-ask.component';
import { IndexComponent } from './user/index/index.component';
import { RegisterComponent } from './modules/register/register.component';
// 单位个人中心
import { CompanyAdminComponent } from './user/zhaopin/admin/company-admin/company-admin.component';
import { BaseInfoComponent } from './user/zhaopin/admin/company-admin/base-info/base-info.component';
import { CompanyLogoComponent } from './user/zhaopin/admin/company-admin/company-logo/company-logo.component';
import { CompanyMapComponent } from './user/zhaopin/admin/company-admin/company-map/company-map.component';
import { JobAddComponent } from './user/zhaopin/admin/company-admin/job-add/job-add.component';
import { InRecruitComponent } from './user/zhaopin/admin/company-admin/in-recruit/in-recruit.component';
import { JobSeekersComponent } from './user/zhaopin/admin/company-admin/job-seekers/job-seekers.component';
import { JobFairComponent } from './user/zhaopin/admin/company-admin/job-fair/job-fair.component';
import { HomePageComponent } from './user/zhaopin/admin/company-admin/home-page/home-page.component';
//密码管理
import { PwdManagerComponent } from './user/zhaopin/admin/company-admin/pwd-manager/pwd-manager.component';

//个人用户个人管理中心
import { UserAdminComponent } from './user/zhaopin/admin/user-admin/user-admin.component';
import { UserHomePageComponent} from './user/zhaopin/admin/user-admin/home-page/home-page.component';
import { UserInfoComponent } from './user/zhaopin/admin/user-admin/user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'companyAdmin', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, data: { title: '天府菁英网' } },
  {
    path: "companyAdmin", component: CompanyAdminComponent, data: { title: '单位主页'},
    children: [
      // 单位个人中心管理
      { path: '', component: HomePageComponent },//管理首页 com-home
      { path: 'com-home', component: HomePageComponent },//管理首页
      { path: 'com-info', component: BaseInfoComponent },//单位资料
      { path: 'com-logo', component: CompanyLogoComponent },//单位logo上传
      { path: 'com-map', component: CompanyMapComponent },//单位地图
      { path: 'com-pwd', component: PwdManagerComponent }, //密码管理 
      { path: 'com-jobadd', component: JobAddComponent },//发布职位
      { path: 'recruit', component: InRecruitComponent },//招聘中的职位
      { path: 'jobFair', component: JobFairComponent },//招聘会
      { path: 'seekers', component: JobSeekersComponent }//搜索人才
    ]
  },
  {
    path: "userAdmin", component: UserAdminComponent, data: { title: '个人主页'},
    children: [
      // 个人中心管理
      { path: '', component: UserHomePageComponent, data: { title: '个人中心'} },//管理首页 
      { path: 'user-home', component: UserHomePageComponent, data: { title: '个人中心'} },//管理首页
      { path: 'user-info', component: UserInfoComponent },//个人资料
      // { path: 'user-logo', component: CompanyLogoComponent },//个人logo上传
      // { path: 'user-map', component: CompanyMapComponent },//个人地图
      // { path: 'user-jobadd', component: JobAddComponent },//发布职位
      // { path: 'recruit', component: InRecruitComponent },//招聘中的职位
      // { path: 'jobFair', component: JobFairComponent },//招聘会
      // { path: 'seekers', component: JobSeekersComponent }//搜索人才
    ]
  },
  {
    path: 'user_index', component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'zhaopin', component: ZhaopinComponent },
      { path: "jobsDetails/:jobId", component: JobsDetailComponent },
      {
        path: "company/:companyId", component: CompanyComponent,
        children: [
          { path: '', component: CompanyHomeComponent },
          { path: 'home', component: CompanyHomeComponent },
          { path: 'jobs', component: CompanyJobsComponent }
        ]
      },
    ]
  },
  { path: "***", component: IndexComponent, data: { title: '天府菁英网-首页' } }

];

// const routes: Routes = [
//   { path: '', redirectTo: 'zhaopin', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent, data: { title: '天府菁英网' }},
//   { path: 'zhaopin', component: ZhaopinComponent, data: { title: '天府新区管委会招聘信息-天府菁英网' } },
//   { path: "jobsDetails/:jobId", component: JobsDetailComponent, data: {title: "个人简历详情-天府新区管委会招聘信息"}},
//   { path: "company/:companyId", component: CompanyComponent, data: { title: "公司详情-天府新区管委会招聘信息"},
//         children:[
//           { path: '', component: CompanyHomeComponent},
//           { path: 'home', component: CompanyHomeComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
//           { path: 'jobs', component: CompanyJobsComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
//           { path: 'recruit', component: SchoolRecruitComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}},
//           { path: 'ask', component: CompanyAskComponent, data: {title:"公司主页-公司详情-天府新区管委会招聘信息"}}

//   ]},
//   { path: "**", component: HomeComponent, data: { title: '天府菁英网-首页' } }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
