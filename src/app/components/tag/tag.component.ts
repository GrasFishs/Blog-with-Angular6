import {Component, Input, OnInit} from '@angular/core';
import {TagService} from './tag.service';

const backgrounds = [
  '#e84e40', '#c41411', '#f06292', '#880e4f', '#f50057',
  '#9c27b0', '#6a1b9a', '#7e57c2', '#4527a0', '#5c6bc0',
  '#303f9f', '#3d5afe', '#5677fc', '#2a36b1', '#0277bd',
  '#0097a7', '#006064', '#4bd6ac', '#00695c', '#004d40',
  '#0a8f08', '#0d5302', '#558b2f', '#33691e', '#827717',
  '#ef6c00', '#e65100', '#e64a19', '#bf360c', '#8d6e63',
  '#4e342e', '#616161', '#212121', '#546e7a', '#37474f'
];

@Component({
  selector: 'ng-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [TagService]
})
export class TagComponent implements OnInit {

  @Input() subTag: string;
  @Input() short: boolean;
  @Input() userId: string;
  @Input() tagId: string;

  allTags: string[];
  bg: string;

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.userId = this.userId ? this.userId : '0';
    this.allTags = this.tagService.getParentType(this.subTag).reverse();
    this.getBackground();
  }

  getBackground() {
    this.bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }

}
