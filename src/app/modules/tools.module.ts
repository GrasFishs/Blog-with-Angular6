import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../components/button/button.component';
import {NavigatorComponent} from '../components/navigator/navigator.component';
import {ToHomeComponent} from '../components/to-home/to-home.component';

const components = [ToHomeComponent, ButtonComponent, NavigatorComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class ToolsModule {
  static forComponents() {
    return components;
  }
}
