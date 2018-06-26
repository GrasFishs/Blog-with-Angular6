import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../Article';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ng-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
  @Input() type: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toArticle(id) {
    this.router.navigate(['/article', id]);
  }

}
