import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlSafe'
})
export class UrlSafePipe implements PipeTransform {

  transform(value:string): any {
    return value.replace(/\W+/g, '-').toLowerCase()
  }

}
