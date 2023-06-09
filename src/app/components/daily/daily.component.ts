import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.models';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  weatherData?: WeatherData;
  currentDate = moment();

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.getWeatherData().subscribe((weatherData) => {
      this.weatherData = weatherData;
      console.log(weatherData, 'ji');
    });
  }

  getDate(unixTimestamp: number): string {
    return moment.unix(unixTimestamp).format('MMMM DD');
  }

  isToday(date: number): boolean {
    const momentDate = moment.unix(date);
    return momentDate.isSame(this.currentDate, 'day');
  }
}
