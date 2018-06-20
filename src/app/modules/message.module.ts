import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagePageComponent} from '../pages/message-page/message-page.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MessageItemComponent} from '../components/message/message-item/message-item.component';
import {MessageTitleComponent} from '../components/message/message-item/message-title/message-title.component';
import {FormatDatePipe} from '../tools/format-date.pipe';
import {MessageContentComponent} from '../components/message/message-item/message-content/message-content.component';
import {RouterModule} from '@angular/router';

const components = [MessagePageComponent, MessageItemComponent, MessageTitleComponent, MessageContentComponent, FormatDatePipe];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: components,
  exports: components
})
export class MessageModule {
}
