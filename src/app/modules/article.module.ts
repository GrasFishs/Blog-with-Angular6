import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleListComponent} from '../components/article-list/article-list.component';
import {ArticleItemComponent} from '../components/article-list/article-item/article-item.component';
import {ArticleComponent} from '../components/article-list/article/article.component';
import {ArticleService} from '../components/article-list/article.service';

const components = [ArticleListComponent, ArticleItemComponent, ArticleComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ArticleService],
  declarations: components,
  exports: components,
})
export class ArticleModule {
  static forComponents() {
    return components;
  }
}
