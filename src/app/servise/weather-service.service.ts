import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private apiKey = '3a2bdea2c40ce99352c436b85b10fb43';


  constructor(private http: HttpClient) {}

  getWeatherDataByCityName(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

}
