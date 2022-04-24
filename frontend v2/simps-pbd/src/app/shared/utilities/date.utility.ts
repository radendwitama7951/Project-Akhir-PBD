import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtility {
  constructor() {}
  public getCurentMonthDate(): Array<number> {
    const result: any = new Date().getDate(); //gets day of month (1-31)
    console.log('What it is ? ', result);
    return [];
  }
}
