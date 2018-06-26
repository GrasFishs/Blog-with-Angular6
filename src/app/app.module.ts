import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToolsModule} from './modules/tools.module';
import {HomeModule} from './modules/home.module';
import {AccessModule} from './modules/access.module';
import {MessageModule} from './modules/message.module';
import {UserModule} from './modules/user.module';
import {AppComponent} from './app.component';
import {RoutingModule} from './modules/routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';;

import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {TagModule} from './modules/tag.module';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToolsModule,
    HomeModule,
    AccessModule,
    MessageModule,
    UserModule,
    TagModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
