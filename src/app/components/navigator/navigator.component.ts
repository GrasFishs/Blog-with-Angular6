import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {MessageService} from '../message/message.service';

@Component({
  selector: 'ng-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  providers: [MessageService]
})
export class NavigatorComponent implements OnInit {

  @Input() login: boolean;
  public styles;

  public counts = [];
  public texts = ['系统', '私信', '动态'];
  public messagesCount: number;
  public innerWidth: number;

  constructor(private route: Router, private msgService: MessageService) {
  }

  ngOnInit() {
    this.counts.push(this.msgService.getNewCount(0));
    this.counts.push(this.msgService.getNewCount(1));
    this.counts.push(this.msgService.getNewCount(2));
    this.messagesCount = this.counts.reduce((a, b) => a + b);
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
