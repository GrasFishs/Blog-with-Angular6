import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {ToolsModule} from './tools.module';

const components = [LoginPageComponent, RegisterPageComponent];

@NgModule({
  imports: [
    CommonModule,
    ToolsModule
  ],
  declarations: components,
  exports: components
})
export class AccessModule {
}
