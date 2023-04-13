import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  convertUnixTimestamp(
    unixTimestamp: number,
    format: string = 'MMMM Do YYYY, h:mm:ss a'
  ): string {
    return moment.unix(unixTimestamp).format(format);
  }
}
