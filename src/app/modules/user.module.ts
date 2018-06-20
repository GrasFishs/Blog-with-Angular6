import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPageComponent} from '../pages/user-page/user-page.component';
import {UserPanelComponent} from '../components/user/user-panel/user-panel.component';
import {ToolsModule} from './tools.module';
import {FormsModule} from '@angular/forms';
import {ArticleModule} from './article.module';

const components = [UserPageComponent, UserPanelComponent];

@NgModule({
  imports: [
    CommonModule,
    ToolsModule,
    ArticleModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class UserModule {
}
