import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule }     from '@angular/common';
// 文件上传
import { FileUploadModule } from 'ng2-file-upload';
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
import { LoginService }   from './service/login.service';
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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SidebarComponent,
    BannerComponent,
    ModelBlockComponent,
    ContentComponent,
    ZhaopinComponent,
    HomeComponent,
    SearchMenuComponent,
    JobsShowComponent,
    HeadTopComponent,
    HeadMiddleComponent,
    HeadNavComponent,
    JobsDetailComponent,
    CompanyComponent,
    CompanyHomeComponent,
    CompanyJobsComponent,
    SchoolRecruitComponent,
    CompanyAskComponent,
    GmapComponent,
    LoginComponent,
    RegisterComponent,
    CompanyAdminComponent,
    BaseInfoComponent,
    CompanyLogoComponent,
    CompanyMapComponent,
    CascaderComponent,
    JobAddComponent,
    InRecruitComponent,
    JobSeekersComponent,
    JobFairComponent,
    HomePageComponent,
    UserAdminComponent,
    ChangePwdComponent,
    PwdManagerComponent,
    UserHomePageComponent,
    UserInfoComponent,
    UserPwdManagerComponent,
    CreateResumeComponent,
    AmendResumeComponent,
    DatePickerComponent,
    FooterComponent,
    JobsSearchComponent,
    ChoeseMenuComponent,
    ZphComponent,
    SearchZphComponent,
    ResumeManageComponent,
    AppliedJobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    FileUploadModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [ LoginService ],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }