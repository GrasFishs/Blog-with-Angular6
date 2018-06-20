import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../components/message/message.service';

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

  constructor(private messageService: MessageService) {
  }

  getContent(index: number) {
    console.log(index);
  }

  ngOnInit(): void {
    this.tabs.push({name: '系统消息'});
    this.tabs.push({name: '私信消息'});
    this.tabs.push({name: '动态消息'});
    this.messageService.getType(SYSTEM_INDEX).subscribe(res => this.tabs[SYSTEM_INDEX].messages = res);
    this.messageService.getType(PRIVACY_INDEX).subscribe(res => this.tabs[PRIVACY_INDEX].messages = res);
    this.messageService.getType(DYNAMIC_INDEX).subscribe(res => this.tabs[DYNAMIC_INDEX].messages = res);
  }

}
