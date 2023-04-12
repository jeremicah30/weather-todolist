import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.models';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private weatherDataSubject = new BehaviorSubject<WeatherData | undefined>(
    undefined
  );

  constructor() {}

  setWeatherData(weatherData: WeatherData) {
    this.weatherDataSubject.next(weatherData);
  }

  getWeatherData() {
    return this.weatherDataSubject.asObservable();
  }
}
