import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../../Message';

@Component({
  selector: 'ng-message-title',
  templateUrl: './message-title.component.html',
  styleUrls: ['./message-title.component.scss']
})
export class MessageTitleComponent implements OnInit {

  @Input() message: Message;

  constructor() {
  }

  ngOnInit() {
  }

}
