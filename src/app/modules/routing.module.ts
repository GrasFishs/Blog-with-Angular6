import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from '../pages/home-page/home-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {Article} from '../components/article-list/article-item/Article';
import {ArticleComponent} from '../components/article-list/article/article.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {
    path: 'access', children: [
      {
        path: 'login', component: LoginPageComponent
      },
      {
        path: 'register', component: RegisterPageComponent
      }
    ]
  },
  {
    path: 'article/:id', component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
