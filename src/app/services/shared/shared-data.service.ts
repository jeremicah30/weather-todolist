import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.models';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedCitySubject = new BehaviorSubject<string>('Manila');
  private weatherDataSubject = new BehaviorSubject<WeatherData | undefined>(
    undefined
  );

  constructor() {}

  setSelectedCity(city: string) {
    this.selectedCitySubject.next(city);
  }

  setWeatherData(weatherData: WeatherData) {
    this.weatherDataSubject.next(weatherData);
  }

  getSelectedCity() {
    return this.selectedCitySubject.asObservable();
  }

  getWeatherData() {
    return this.weatherDataSubject.asObservable();
  }
}
