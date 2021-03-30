import { PipeTransform } from '@angular/core';


export class DistancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return value + " magamiles";

  }

}
