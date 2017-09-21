import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule }     from '@angular/common';
// 服务
import { LoginService }   from './service/login.service';
import { RegisterService } from './service/register.service';
// 文件上传
import { FileUploadModule } from 'ng2-file-upload';
//富文本编辑器
import { CKEditorModule } from 'ng2-ckeditor';
// 文件上传
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { IndexComponent } from './user/index/index.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { BannerComponent } from './modules/banner/banner.component';
import { ChoeseMenuComponent } from './user/zhaopin/choese-menu/choese-menu.component';
import { ZphComponent } from './user/zhaopin/zph/zph.component';
import { ModelBlockComponent } from './modules/model-block/model-block.component';
import { ContentComponent } from './user/index/home/content/content.component';
import { ZhaopinComponent } from './user/zhaopin/zhaopin.component';
import { HomeComponent } from './user/index/home/home.component';
import { SearchMenuComponent } from './user/zhaopin/search-menu/search-menu.component';
import { JobsShowComponent } from './user/zhaopin/jobs-show/jobs-show.component';
import { HeadTopComponent } from './modules/header/head-top/head-top.component';
import { HeadMiddleComponent } from './modules/header/head-middle/head-middle.component';
import { HeadNavComponent } from './modules/header/head-nav/head-nav.component';
import { JobsDetailComponent } from './user/zhaopin/jobs-detail/jobs-detail.component';
import { CompanyComponent } from './user/zhaopin/company/company.component';
import { CompanyHomeComponent } from './user/zhaopin/company/company-home/company-home.component';
import { CompanyJobsComponent } from './user/zhaopin/company/company-jobs/company-jobs.component';
import { SchoolRecruitComponent } from './user/zhaopin/company/school-recruit/school-recruit.component';
import { CompanyAskComponent } from './user/zhaopin/company/company-ask/company-ask.component';
import { GmapComponent } from './modules/gmap/gmap.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { CompanyAdminComponent } from './user/zhaopin/admin/company-admin/company-admin.component';
import { BaseInfoComponent } from './user/zhaopin/admin/company-admin/base-info/base-info.component';
import { CompanyLogoComponent } from './user/zhaopin/admin/company-admin/company-logo/company-logo.component';
import { CompanyMapComponent } from './user/zhaopin/admin/company-admin/company-map/company-map.component';
import { CascaderComponent } from './modules/cascader/cascader.component';
import { JobAddComponent } from './user/zhaopin/admin/company-admin/job-add/job-add.component';
import { InRecruitComponent } from './user/zhaopin/admin/company-admin/in-recruit/in-recruit.component';
import { JobSeekersComponent } from './user/zhaopin/admin/company-admin/job-seekers/job-seekers.component';
import { JobFairComponent } from './user/zhaopin/admin/company-admin/job-fair/job-fair.component';
import { HomePageComponent } from './user/zhaopin/admin/company-admin/home-page/home-page.component';
import { JobEditComponent } from './user/zhaopin/admin/company-admin/job-add/job-edit/job-edit.component';
//密码修改
import { ChangePwdComponent } from './modules/change-pwd/change-pwd.component';
import { PwdManagerComponent } from './user/zhaopin/admin/company-admin/pwd-manager/pwd-manager.component';
import { ResumeManageComponent } from './user/zhaopin/admin/company-admin/resume-manage/resume-manage.component';

//个人用户个人管理中心
import { UserAdminComponent } from './user/zhaopin/admin/user-admin/user-admin.component';
import { UserHomePageComponent} from './user/zhaopin/admin/user-admin/home-page/home-page.component';
import { UserInfoComponent } from './user/zhaopin/admin/user-admin/user-info/user-info.component';
import { UserPwdManagerComponent } from './user/zhaopin/admin/user-admin/user-pwd-manager/user-pwd-manager.component';
import { CreateResumeComponent } from './user/zhaopin/admin/user-admin/create-resume/create-resume.component';
import { AmendResumeComponent } from './user/zhaopin/admin/user-admin/amend-resume/amend-resume.component';
import { DatePickerComponent } from './modules/date-picker/date-picker.component';
import { JobsSearchComponent } from './user/zhaopin/admin/user-admin/jobs-search/jobs-search.component';
import { SearchZphComponent } from './user/zhaopin/admin/user-admin/search-zph/search-zph.component';
import { AppliedJobsComponent } from './user/zhaopin/admin/user-admin/applied-jobs/applied-jobs.component';
import { TopComponent } from './modules/top/top.component';

// 后台管理系统页面
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminLoginComponent } from './administrator/login/login.component';
import { AdminDashComponent } from './administrator/dash/dash.component';
import { ArticleCategoriesComponent } from './administrator/admin/news/article-categories/article-categories.component';
import { ArticleCategoriesEditComponent } from './administrator/admin/news/article-categories/article-categories-edit/article-categories-edit.component';
import { ArticleComponent } from './administrator/admin/news/article/article.component';
import { AritcleEditComponent } from './administrator/admin/news/article/aritcle-edit/aritcle-edit.component';
import { AdminNavbarComponent } from './administrator/admin/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './administrator/admin/admin-header/admin-header.component';
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
import { AdminUserAddComponent } from './administrator/admin/manage/admin-user/admin-user-add/admin-user-add.component';
import { AdminPermissionAddComponent } from './administrator/admin/manage/admin-user-permission/admin-permission-add/admin-permission-add.component';
import { AdminRoleAddComponent } from './administrator/admin/manage/admin-user-role/admin-role-add/admin-role-add.component';
import { PolicyComponent } from './user/index/home/modules/policy/policy.component';
import { JobFormComponent } from './user/zhaopin/admin/company-admin/job-add/job-form/job-form.component';

@NgModule({
  declarations: [
    AppComponent,IndexComponent,HeaderComponent,SidebarComponent,BannerComponent,ModelBlockComponent,ContentComponent,
    ZhaopinComponent,HomeComponent,SearchMenuComponent,JobsShowComponent,HeadTopComponent,HeadMiddleComponent,HeadNavComponent,JobsDetailComponent,CompanyComponent,CompanyHomeComponent,CompanyJobsComponent,SchoolRecruitComponent,CompanyAskComponent,GmapComponent,LoginComponent,RegisterComponent,
    CompanyAdminComponent,//单位后台
    BaseInfoComponent,CompanyLogoComponent,CompanyMapComponent,CascaderComponent,JobAddComponent,InRecruitComponent,JobSeekersComponent,JobFairComponent,HomePageComponent,
    UserAdminComponent,//个人后台
    ChangePwdComponent,PwdManagerComponent,UserHomePageComponent,UserInfoComponent,UserPwdManagerComponent,CreateResumeComponent,AmendResumeComponent,DatePickerComponent,FooterComponent,JobsSearchComponent,
    ChoeseMenuComponent,ZphComponent,SearchZphComponent,ResumeManageComponent,AppliedJobsComponent,TopComponent,
    AdministratorComponent,//后台管理系统
    AdminLoginComponent, AdminDashComponent,AdminNavbarComponent,AdminHeaderComponent,SettingIndustryComponent,SettingAreaComponent,SettingJobComponent,SettingMemberComponent,
    AdminUserComponent,AdminUserRoleComponent,AdminUserPermissionComponent,ArticleCategoriesComponent,ArticleCategoriesEditComponent,ArticleComponent,
    AritcleEditComponent,SettingIndustryEditComponent,SettingAreaEditComponent,SettingJobEditComponent,MemberSexEditComponent,MemberSexAddComponent,
    MemberMarriageEditComponent,MemberMarriageAddComponent,MemberEduEditComponent,MemberEduAddComponent,MemberExpEditComponent,
    MemberExpAddComponent,MemberSalaryEditComponent,MemberSalaryAddComponent,MemberJobNatureEditComponent,MemberJobNatureAddComponent,
    MemberJobstatusEditComponent,MemberJobstatusAddComponent,MemberArrivalEditComponent,MemberArrivalAddComponent,MemberComstatusEditComponent,
    MemberComstatusAddComponent,MemberComscaleEditComponent,MemberComscaleAddComponent,MemberJobnumberEditComponent,MemberJobnumberAddComponent,
    MemberLangEditComponent,MemberLangAddComponent,MemberWelfareEditComponent,MemberWelfareAddComponent,AdminUserAddComponent,
    AdminPermissionAddComponent,AdminRoleAddComponent,PolicyComponent, JobEditComponent, JobFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    FileUploadModule,
    CKEditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [ LoginService, RegisterService ],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }