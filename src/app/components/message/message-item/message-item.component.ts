import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../Message';

@Component({
  selector: 'ng-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() message: Message;

  constructor() {
  }

  ngOnInit() {
  }

}

