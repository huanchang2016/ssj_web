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
import { ArticleCategoriesEditComponent } from './administrator/admin/news/article-categories/article-categories-edit/article-categories-edit.component';
import { ArticleComponent } from './administrator/admin/news/article/article.component';
import { AritcleEditComponent } from './administrator/admin/news/article/aritcle-edit/aritcle-edit.component';

import { SettingIndustryComponent } from './administrator/admin/setting/setting-industry/setting-industry.component';
import { SettingAreaComponent } from './administrator/admin/setting/setting-area/setting-area.component';
import { SettingJobComponent } from './administrator/admin/setting/setting-job/setting-job.component';
import { SettingMemberComponent } from './administrator/admin/setting/setting-member/setting-member.component';
import { AdminUserComponent } from './administrator/admin/manage/admin-user/admin-user.component';
import { AdminUserRoleComponent } from './administrator/admin/manage/admin-user-role/admin-user-role.component';
import { AdminUserPermissionComponent } from './administrator/admin/manage/admin-user-permission/admin-user-permission.component';
import { SettingIndustryEditComponent } from './administrator/admin/setting/setting-industry/setting-industry-edit/setting-industry-edit.component';
import { SettingAreaEditComponent } from './administrator/admin/setting/setting-area/setting-area-edit/setting-area-edit.component';
import { SettingJobEditComponent } from './administrator/admin/setting/setting-job/setting-job-edit/setting-job-edit.component';
// 会员类别管理
import { MemberSexEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-sex-edit/member-sex-edit.component';
import { MemberSexAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-sex-edit/member-sex-add/member-sex-add.component';
import { MemberMarriageEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-marriage-edit/member-marriage-edit.component';
import { MemberMarriageAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-marriage-edit/member-marriage-add/member-marriage-add.component';
import { MemberEduEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-edu-edit/member-edu-edit.component';
import { MemberEduAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-edu-edit/member-edu-add/member-edu-add.component';
import { MemberExpEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-exp-edit/member-exp-edit.component';
import { MemberExpAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-exp-edit/member-exp-add/member-exp-add.component';
import { MemberSalaryEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-salary-edit/member-salary-edit.component';
import { MemberSalaryAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-salary-edit/member-salary-add/member-salary-add.component';
import { MemberJobNatureEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-job-nature-edit/member-job-nature-edit.component';
import { MemberJobNatureAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-job-nature-edit/member-job-nature-add/member-job-nature-add.component';
import { MemberJobstatusEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-jobstatus-edit/member-jobstatus-edit.component';
import { MemberJobstatusAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-jobstatus-edit/member-jobstatus-add/member-jobstatus-add.component';
import { MemberArrivalEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-arrival-edit/member-arrival-edit.component';
import { MemberArrivalAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-arrival-edit/member-arrival-add/member-arrival-add.component';
import { MemberComstatusEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-comstatus-edit/member-comstatus-edit.component';
import { MemberComstatusAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-comstatus-edit/member-comstatus-add/member-comstatus-add.component';
import { MemberComscaleEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-comscale-edit/member-comscale-edit.component';
import { MemberComscaleAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-comscale-edit/member-comscale-add/member-comscale-add.component';
import { MemberJobnumberEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-jobnumber-edit/member-jobnumber-edit.component';
import { MemberJobnumberAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-jobnumber-edit/member-jobnumber-add/member-jobnumber-add.component';
import { MemberLangEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-lang-edit/member-lang-edit.component';
import { MemberLangAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-lang-edit/member-lang-add/member-lang-add.component';
import { MemberWelfareEditComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-welfare-edit/member-welfare-edit.component';
import { MemberWelfareAddComponent } from './administrator/admin/setting/setting-member/setting-member-edit/member-welfare-edit/member-welfare-add/member-welfare-add.component';




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
            { path: 'categories', component: ArticleCategoriesComponent, data: {title: '新闻分类管理-后台管理系统'} },
            { path: 'categories/edit/:id', component: ArticleCategoriesEditComponent, data: {title: '新闻分类编辑-后台管理系统'} },
            { path: 'article', component: ArticleComponent, data: {title: '新闻管理-后台管理系统'} },
            { path: 'article/edit/:id', component: AritcleEditComponent, data: {title: '新闻编辑-后台管理系统'} },
            // 系统设置
            { path: 'industry', component: SettingIndustryComponent, data: {title: '行业设置-系统设置-后台管理系统'} },
            { path: 'area', component: SettingAreaComponent, data: {title: '城市类别-系统设置-后台管理系统'} },
            { path: 'job', component: SettingJobComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member', component: SettingMemberComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'industry/edit/:id', component: SettingIndustryEditComponent, data: {title: '行业设置-系统设置-后台管理系统'} },
            { path: 'area/edit/:id', component: SettingAreaEditComponent, data: {title: '城市类别-系统设置-后台管理系统'} },
            { path: 'job/edit/:id', component: SettingJobEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            // 系统设置-类别管理
            { path: 'member_sex', component: MemberSexEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_sex/edit/:id', component: MemberSexAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_married', component: MemberMarriageEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_married/edit/:id', component: MemberMarriageAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_edu', component: MemberEduEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_edu/edit/:id', component: MemberEduAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_exp', component: MemberExpEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_exp/edit/:id', component: MemberExpAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_salary', component: MemberSalaryEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_salary/edit/:id', component: MemberSalaryAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_nature', component: MemberJobNatureEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_nature/edit/:id', component: MemberJobNatureAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_status', component: MemberJobstatusEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_status/edit/:id', component: MemberJobstatusAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_arrival', component: MemberArrivalEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_arrival', component: MemberArrivalAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_com_status', component: MemberComstatusEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_com_status/edit/:id', component: MemberComstatusAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_com_scale', component: MemberComscaleEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_com_scale/edit/:id', component: MemberComscaleAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_number', component: MemberJobnumberEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_job_number/edit/:id', component: MemberJobnumberAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_lang', component: MemberLangEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_lang/edit/:id', component: MemberLangAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_welfare', component: MemberWelfareEditComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            { path: 'member_welfare/edit/:id', component: MemberWelfareAddComponent, data: {title: '职位类别-系统设置-后台管理系统'} },
            //系统设置===》类别设置
            // 管理员
            { path: 'user', component: AdminUserComponent, data: {title: '用户列表-系统设置-后台管理系统'} },
            { path: 'user_role', component: AdminUserRoleComponent, data: {title: '用户组-系统设置-后台管理系统'} },
            { path: 'user_permission', component: AdminUserPermissionComponent, data: {title: '权限-系统设置-后台管理系统'} }
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
