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
    return of(messages.filter(msg => msg.msgType === type));
  }

}
