import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {


  transform(value:number):number {
    let iNo1:number=3;
    let iAns=iNo1*value;
    return iAns;
  }
  

}
