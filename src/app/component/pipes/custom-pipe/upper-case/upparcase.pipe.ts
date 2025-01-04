import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upparcase'
})
export class UpparcasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
