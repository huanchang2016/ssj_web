import { Component, OnInit, Output, EventEmitter } from '@angular/core';


const options = [{
  value: '四川',
  label: '四川',
  children: [
    { value: '成都', label: '成都',
      children: [
        { value: '天府新区', label: '天府新区', isLeaf: true },
        { value: '高新区', label: '高新区', isLeaf: true },
        { value: '锦江区', label: '锦江区', isLeaf: true }
      ],
    },
    { value: '绵阳', label: '绵阳',
      children: [
        { value: '绵阳东', label: '绵阳东', isLeaf: true },
        { value: '绵阳西', label: '绵阳西', isLeaf: true },
        { value: '绵阳南', label: '绵阳南', isLeaf: true }
      ],
    }
  ],
    },{
  value: '浙江',
  label: '浙江',
  children: [{
    value: 'Hangzhou',
    label: '杭州',
    children: [{
      value: 'West Lake',
      label: '西湖',
      isLeaf: true
    }],
  }],
  }, {
  value: '江苏',
  label: '江苏',
  children: [{
    value: 'Nanjing',
    label: '南京',
    children: [{
      value: 'Zhong Hua Men',
      label: '中华门',
      isLeaf: true
    }],
  }],
}];

@Component({
  selector: 'cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent implements OnInit {

  @Output('companyLocation')
  locationAddress: EventEmitter<any> = new EventEmitter();

  // 省市级联
  _options = options;
  _value: any[] = null;

  constructor() { }

  ngOnInit() {
  }

  sendCompanyAddredd(value) {
    this.locationAddress.emit(value);
  }

  _console($event){
    console.log($event);
  }

}
