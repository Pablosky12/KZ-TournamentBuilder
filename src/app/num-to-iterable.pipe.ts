import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToIterable'
})
export class NumToIterablePipe implements PipeTransform {

  transform(value: Number, startingNumber: any= 0): any {
    let res: Number[] = [];
    for (let i = startingNumber; i < value + startingNumber; i++) {
      res.push(i);
    }
    return res;
  }

}
