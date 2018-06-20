import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'ng-article-list',
  templateUrl: './article-list.component.html',
  providers: [ArticleService],
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public articles;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArticles();
    this.getArticlesByUserId();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

  getArticlesByUserId() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.articleService.getArticlesByUserId(userId).subscribe(articles => this.articles = articles);
    }
  }

}
