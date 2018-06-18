import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArticleService} from '../article.service';
import {Article} from '../article-item/Article';

@Component({
  selector: 'ng-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id).subscribe(a => this.article = a);
  }

}
