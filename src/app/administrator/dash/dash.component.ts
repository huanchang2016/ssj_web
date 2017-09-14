import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 底部引入的js
    $("#per_page").change(function () {
        var per_page = $(this).val();
        window.location.href = "/admin/article_categories?per_page="+per_page;
    })

  }

}
