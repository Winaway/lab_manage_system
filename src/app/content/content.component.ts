import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import {startWith} from "rxjs/operator/startWith";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/dashboard') {
          this.pageTitle = '';
          this.pageDesc = '';
        } else if (event.url.startsWith('/stock')) {
          this.pageTitle = '项目信息';
          this.pageDesc = '在这里进行试验数据的管理';
        }else if (event.url.startsWith('/user')) {
          this.pageTitle = '用户信息';
          this.pageDesc = '在这里进行用户信息的管理';
        }else if (event.url.startsWith('/statistic')) {
          this.pageTitle = '数据统计';
          this.pageDesc = '';
        }
      })
  }

  ngOnInit() {
  }

}
