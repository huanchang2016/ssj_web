import { Component, OnInit } from '@angular/core';


export const Address: any[] = ["不限", "成都", "天府新区","高新区","天府新区","高新区", "天府新区","高新区", "天府新区","高新区", "天府新区","高新区", "111", "222", "333"];
export const Experience:any[] = ["不限", "应届毕业生", "3年以下", "3-5年", "5-10年", "10年以上", "不要求"];
export const Collages:any[] = ["不限", "大专", "本科", "硕士", "博士", "不要求"];
export const Financing:any[] = ["不限", "未融资", "A轮", "B轮", "C轮", "D轮及以上", "上市公司", "不需要融资"];
export const Industry:any[] = ["移动互联网", "电子商务", "金融", "企业服务", "教育", "文化娱乐", "游戏", "O2O", "硬件"]
        

export const Salary:any[] =[
  {"label":"不限", value: "不限"},
  {"label":"2K以下", value: "2K以下"},
  {"label":"2K-5K", value: "2K-5K"},
  {"label":"5K-10k", value: "5K-10k"},
  {"label":"10k-15k", value: "10k-15k"},
  {"label":"15k-25k", value: "15k-25k"},
  {"label":"25k-50k", value: "25k-50k"},
  {"label":"50k以上", value: "50k以上"},]
export const JobCategory:any[] = [
  {"label":"不限", value: "不限"},
  {"label":"全职", value: "全职"},
  {"label":"兼职", value: "兼职"},
  {"label":"实习", value: "实习"}
];


@Component({
  selector: 'choese-menu',
  templateUrl: './choese-menu.component.html',
  styleUrls: ['./choese-menu.component.css']
})


export class ChoeseMenuComponent implements OnInit {
  public address = Address;
  public experience = Experience;
  public collages = Collages;
  public financing = Financing;
  public industry = Industry;
  public salary = Salary;
  public jobCategory = JobCategory;

  // 月薪
  monthSalary = '不限';
  // 工作性质.
  jobClass = "不限";


  // 单选项
  public addressRadioValue = '0';
  public expRadioValue = '0';
  public collageRadioValue = '0';
  public finaceRadioValue = '0';
  public indsRadioValue = '0';
  public sortRadioValue = '0';

  public jobsListDetails;
  constructor() { }

  ngOnInit() {
  }

}
