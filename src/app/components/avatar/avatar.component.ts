import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() src: string;
  @Input() size: number;
  @Input() userId: string;

  public styles;

  constructor() {
  }

  ngOnInit() {
    this.styles = {
      'width': this.size ? this.size + 'px' : '50px',
      'height': this.size ? this.size + 'px' : '50px'
    };
  }

}
