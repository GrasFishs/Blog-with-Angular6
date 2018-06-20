import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from './formatDate';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date): string {
    return formatDate(value.toString());
  }

}
