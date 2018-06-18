import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string;
  @Input() color: string;
  @Input() display: string;
  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();
  public classes;

  constructor() {
  }

  ngOnInit() {
    this.classes = {
      'button': true,
      'border': this.type === 'border',
    };
  }

  onClick(event: Event) {
    this.click.emit(event);
  }

}
