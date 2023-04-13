import { Component } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.models';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  weatherData?: WeatherData;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.getWeatherData().subscribe((weatherData) => {
      this.weatherData = weatherData;
      console.log(weatherData, 'date');
    });
  }
}
