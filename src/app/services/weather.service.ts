import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      // Add Headers and Params using set() method
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('location', cityName)
        .set('u', 'c')
        .set('format', 'json'),
    });
  }
}
