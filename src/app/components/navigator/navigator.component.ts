import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'ng-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  public styles;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // 如果是登录或注册界面，则隐藏该导航栏
          this.styles = {
            'display': event.url.split('/')[1] === 'access' ? 'none' : 'flex'
          };
        }
      }
    );
  }

  to(route) {
    this.route.navigate([route]);
  }

}
