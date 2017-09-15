import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './user/index/home/home.component';
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
import { ResumeManageComponent } from './user/zhaopin/admin/company-admin/resume-manage/resume-manage.component';

//个人用户个人管理中心
import { UserAdminComponent } from './user/zhaopin/admin/user-admin/user-admin.component';
import { UserHomePageComponent} from './user/zhaopin/admin/user-admin/home-page/home-page.component';
import { UserInfoComponent } from './user/zhaopin/admin/user-admin/user-info/user-info.component';
// 密码管理
import { UserPwdManagerComponent } from './user/zhaopin/admin/user-admin/user-pwd-manager/user-pwd-manager.component';
import { CreateResumeComponent } from './user/zhaopin/admin/user-admin/create-resume/create-resume.component';
import { AmendResumeComponent } from './user/zhaopin/admin/user-admin/amend-resume/amend-resume.component';
import { JobsSearchComponent } from './user/zhaopin/admin/user-admin/jobs-search/jobs-search.component';
import { SearchZphComponent } from './user/zhaopin/admin/user-admin/search-zph/search-zph.component';
import { AppliedJobsComponent } from './user/zhaopin/admin/user-admin/applied-jobs/applied-jobs.component';

// 后台管理系统页面
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminLoginComponent } from './administrator/login/login.component';
import { AdminDashComponent } from './administrator/dash/dash.component';
import { ArticleCategoriesComponent } from './administrator/admin/news/article-categories/article-categories.component';
import { ArticleComponent } from './administrator/admin/news/article/article.component';
import { ArticleClassEditComponent } from './administrator/admin/news/article-categories/article-class-edit/article-edit.component';//文章分类编辑
import { ArticleEditComponent } from './administrator/admin/news/article/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'administrator', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, data: { title: '天府菁英网' } },
  { path: 'administrator', component: AdministratorComponent, data: { title: '后台管理系统' },
    children: [
      // 管理员后台管理控制台
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent, data: {title: '管理员登录-后台管理系统'} },
      { path: 'dash', component: AdminDashComponent, data: {title: '管理员登录-后台管理系统'},
          children: [
            { path: 'article_categories', component: ArticleCategoriesComponent, data: {title: '新闻分类管理-后台管理系统'} },
            { path: 'article_categories/:id', component: ArticleClassEditComponent, data: {title: '新闻分类编辑-后台管理系统'} },
            { path: 'article', component: ArticleComponent, data: {title: '新闻管理-后台管理系统'} },
            { path: 'article/:id', component: ArticleEditComponent, data: {title: '新闻编辑-后台管理系统'} }
          ]
      },
    ]
  },
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
      { path: 'seekers', component: JobSeekersComponent },//搜索人才
      { path: 'resumeManage', component: ResumeManageComponent }//简历管理 
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
      { path: 'user-pwd', component: UserPwdManagerComponent },//个人用户密码管理
      { path: 'resume', component: CreateResumeComponent },//创建简历
      { path: 'complete-resume', component: AmendResumeComponent},// 完善简历 AmendResumeComponent
      { path: 'appliedJobs', component: AppliedJobsComponent },//已申请的职位
      // { path: 'user-map', component: CompanyMapComponent },//地图搜索职位
      { path: 'zph', component: SearchZphComponent },//招聘会
      { path: 'jobsearch', component: JobsSearchComponent }//搜索职位
    ]
  },
  {
    path: 'user_index', component: IndexComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
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


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
