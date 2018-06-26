import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../components/article/article.service';
import {Article} from '../../components/article/Article';

@Component({
  selector: 'ng-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ArticleService]
})
export class HomePageComponent implements OnInit {

  public articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
  }


  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

}
