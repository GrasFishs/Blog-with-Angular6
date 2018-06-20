import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleListComponent} from '../components/article/article-list/article-list.component';
import {ArticleItemComponent} from '../components/article/article-item/article-item.component';
import {ArticleComponent} from '../components/article/article/article.component';
import {ArticleService} from '../components/article/article.service';
import {RouterModule} from '@angular/router';

const components = [ArticleListComponent, ArticleItemComponent, ArticleComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
