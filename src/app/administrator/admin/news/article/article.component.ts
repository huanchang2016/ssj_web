import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [
    './article.component.css',
    './../../../../../assets/administrator/vendor/bootstrap-daterangepicker/daterangepicker-bs3.css',
    './../../../../../assets/administrator/vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
    './../../../../../assets/administrator/vendor/bootstrap-timepicker/css/bootstrap-timepicker.min.css'
  ]
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 有不可修复的bug存在。
    // $('#drp').daterangepicker({
    //     format: 'YYYY-MM-DD',
    //     startDate: '2017-01-01',
    //     endDate: '2017-12-31',
    //     locale: {
    //         applyLabel: '确定',
    //         cancelLabel: '取消',
    //         fromLabel: '起始时间',
    //         toLabel: '结束时间',
    //         customRangeLabel: '自定义',
    //         daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
    //         monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
    //             '七月', '八月', '九月', '十月', '十一月', '十二月'],
    //         firstDay: 1
    //     },
    //     opens: 'left'
    // });
    

  }
  

}
