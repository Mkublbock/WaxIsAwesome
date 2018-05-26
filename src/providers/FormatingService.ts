import { Injectable } from '@angular/core';

@Injectable()
export class FormattingService {
  constructor() { }
  formatNumber(x: any) {
    let result = x;
    if (x.toString()[x.length - 1] === 0) {
      result = x.toString().slice(0, x.length - 2);
    }
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return result;
  }
}
