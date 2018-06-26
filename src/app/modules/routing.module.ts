import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from '../pages/home-page/home-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {ArticleComponent} from '../components/article/article/article.component';
import {MessagePageComponent} from '../pages/message-page/message-page.component';
import {UserPageComponent} from '../pages/user-page/user-page.component';
import {TagPageComponent} from '../pages/tag-page/tag-page.component';

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
  },
  {
    path: 'message', component: MessagePageComponent
  },
  {
    path: 'user/:id', component: UserPageComponent
  },
  {
    path: 'tag/:tag/:user', component: TagPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
