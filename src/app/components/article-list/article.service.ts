import {Injectable} from '@angular/core';
import {articles} from './articles';
import {Article} from './article-item/Article';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ArticleService {

  constructor() {
  }

  getArticles(): Observable<Article[]> {
    return of(articles);
  }

  getArticle(id): Observable<Article> {
    return of(articles.find(article => article.id === id.toString()));
  }

}
