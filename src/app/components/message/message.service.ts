import {Injectable} from '@angular/core';
import {Message} from './Message';
import {messages} from './messages';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MessageService {

  constructor() {
  }

  getType(type: number) {
    const filterMessages = messages.filter(msg => msg.msgType === type);
    const sortMessages = filterMessages.sort((a, b) => a.viewed && !b.viewed ? 1 : -1);
    return of(sortMessages);
  }

  getNewCount(type: number) {
    const filterMessages = messages.filter(msg => msg.msgType === type && !msg.viewed);
    return filterMessages.length;
  }

}
