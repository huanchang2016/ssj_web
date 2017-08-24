import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { IndexComponent } from './user/index/index.component';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { BannerComponent } from './modules/banner/banner.component';
import { ModelBlockComponent } from './modules/model-block/model-block.component';
import { ContentComponent } from './modules/content/content.component';
import { ZhaopinComponent } from './user/zhaopin/zhaopin.component';
import { HomeComponent } from './user/home/home.component';
import { SearchMenuComponent } from './user/zhaopin/search-menu/search-menu.component';
import { JobsShowComponent } from './user/zhaopin/jobs-show/jobs-show.component';
import { HeadTopComponent } from './modules/header/head-top/head-top.component';
import { HeadMiddleComponent } from './modules/header/head-middle/head-middle.component';
import { HeadNavComponent } from './modules/header/head-nav/head-nav.component';
import { JobsDetailComponent } from './user/zhaopin/jobs-detail/jobs-detail.component';
import { CompanyComponent } from './user/zhaopin/company/company.component';


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
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }