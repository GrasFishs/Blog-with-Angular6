import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../components/button/button.component';
import {NavigatorComponent} from '../components/navigator/navigator.component';
import {ToHomeComponent} from '../components/to-home/to-home.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AvatarComponent} from '../components/avatar/avatar.component';
import {RoutingModule} from './routing.module';
import {TagComponent} from '../components/tag/tag.component';

const components = [ToHomeComponent, ButtonComponent, NavigatorComponent, AvatarComponent];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    RoutingModule,
  ],
  declarations: components,
  exports: components
})
export class ToolsModule {
}
