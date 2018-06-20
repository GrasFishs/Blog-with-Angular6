import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../../Message';

@Component({
  selector: 'ng-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss']
})
export class MessageContentComponent implements OnInit {

  @Input() message: Message;

  constructor() {
  }

  ngOnInit() {
  }

}
