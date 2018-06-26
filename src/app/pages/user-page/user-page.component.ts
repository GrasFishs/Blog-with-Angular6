import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../components/article/article.service';
import {Article} from '../../components/article/Article';

@Component({
  selector: 'ng-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  providers: [ArticleService]
})
export class UserPageComponent implements OnInit {

  public articles: Article[];

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArticlesByUserId();
  }

  getArticlesByUserId() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.articleService.getArticlesByUserId(userId).subscribe(articles => this.articles = articles);
    }
  }

}
