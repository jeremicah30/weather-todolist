import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.models';
import { SharedDataService } from 'src/app/services/shared/shared-data.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  weatherData?: WeatherData;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.getWeatherData().subscribe((weatherData) => {
      this.weatherData = weatherData;
      console.log(weatherData, 'ji');
      this.extractDate();
    });
  }

  extractDate(): void {
    console.log(this.weatherData, 'nut');
  }
}
