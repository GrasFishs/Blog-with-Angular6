import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../components/message/message.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {debounceTime} from 'rxjs/operators';

const SYSTEM_INDEX = 0;
const PRIVACY_INDEX = 1;
const DYNAMIC_INDEX = 2;

@Component({
  selector: 'ng-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
  providers: [MessageService]
})

export class MessagePageComponent implements OnInit {
  tabs = [];
  selectedIndex = 0;
  tabPosition: string;

  constructor(private messageService: MessageService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initSelection();
    this.tabs.push({name: '系统消息'});
    this.tabs.push({name: '私信消息'});
    this.tabs.push({name: '动态消息'});
    this.messageService.getType(SYSTEM_INDEX).subscribe(res => this.tabs[SYSTEM_INDEX].messages = res);
    this.messageService.getType(PRIVACY_INDEX).subscribe(res => this.tabs[PRIVACY_INDEX].messages = res);
    this.messageService.getType(DYNAMIC_INDEX).subscribe(res => this.tabs[DYNAMIC_INDEX].messages = res);

    this.tabPosition = +window.innerWidth <= 768 ? 'top' : 'left';
    Observable.fromEvent(window, 'resize').pipe(
      debounceTime(100),
    ).subscribe(event => {
      const width = +window.innerWidth;
      this.tabPosition = width <= 768 ? 'top' : 'left';
    });
  }

  routeChange(index: number) {
    this.router.navigate(['/message'], {queryParams: {select: index}});
  }

  initSelection() {
    this.selectedIndex = +this.activeRoute.snapshot.queryParamMap.get('select');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedIndex = +event.url.split('=')[1];
      }
    });
  }

}
