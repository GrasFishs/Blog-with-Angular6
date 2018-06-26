import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingModule} from './routing.module';
import {TagComponent} from '../components/tag/tag.component';
import {TagPageComponent} from '../pages/tag-page/tag-page.component';

const components = [TagComponent, TagPageComponent];

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
  ],
  declarations: components,
  exports: components
})
export class TagModule {
}
