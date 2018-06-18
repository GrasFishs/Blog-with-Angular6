import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleModule} from './article.module';

import {BoardComponent} from '../components/board/board.component';
import {TagsListComponent} from '../components/tags-list/tags-list.component';
import {RecommendUsersComponent} from '../components/recommend-users/recommend-users.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';

const components = [TagsListComponent, BoardComponent, RecommendUsersComponent, ArticleModule.forComponents(), HomePageComponent];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: components,
  exports: components
})
export class HomeModule {
}
