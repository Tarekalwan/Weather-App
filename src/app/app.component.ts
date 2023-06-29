import { Component } from '@angular/core';
import { WeatherServiceService } from './servise/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather-App';
  weatherData: any;
  city: string = '';

  constructor(private weatherService: WeatherServiceService) { }

  getWeatherData() {
    this.weatherService.getWeatherDataByCityName(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Erreur: ' + error.message);
      });
  }

}
