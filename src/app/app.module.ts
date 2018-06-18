import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToolsModule} from './modules/tools.module';
import {HomeModule} from './modules/home.module';
import {AccessModule} from './modules/access.module';

import {AppComponent} from './app.component';
import {RoutingModule} from './modules/routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToolsModule,
    HomeModule,
    AccessModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
