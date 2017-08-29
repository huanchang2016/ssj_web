import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

   _value: string;
   phoneNumber: string = "028-80510871";


  _value1: any[] = null;

  _console(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }


}
