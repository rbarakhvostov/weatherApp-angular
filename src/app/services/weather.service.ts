import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const {
      weatherApiBaseUrl,
      XRapidAPIHostHeaderName,
      XRapidAPIHostHeaderValue,
      XRapidAPIKeyHeaderName,
      XRapidAPIKeyHeaderValue} = environment;

    return this.http.get<WeatherData>(weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(XRapidAPIHostHeaderName, XRapidAPIHostHeaderValue)
      .set(XRapidAPIKeyHeaderName, XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
