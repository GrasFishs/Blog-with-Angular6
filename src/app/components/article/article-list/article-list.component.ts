import {Component, OnInit} from '@angular/core';
import {Article} from '../article-item/Article';
import {articles} from './articles';
import {ArticleService} from '../article.service';


@Component({
  selector: 'ng-article-list',
  templateUrl: './article-list.component.html',
  providers: [ArticleService],
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public articles;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(a => this.articles = a);
  }

}
