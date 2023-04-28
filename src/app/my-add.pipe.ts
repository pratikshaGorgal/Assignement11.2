import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value:number):number {
    let iNo1:number=3;
    let iAns=iNo1+value;
    return iAns;
  }

}
