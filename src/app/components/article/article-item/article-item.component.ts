import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../Article';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toArticle(id) {
    this.router.navigate(['/article', id]);
  }

}
