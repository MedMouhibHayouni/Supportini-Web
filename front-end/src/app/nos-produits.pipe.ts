import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nosProduits'
})
export class NosProduitsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
