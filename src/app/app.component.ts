import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  cityName = 'Gomel';
  weatherData?: WeatherData | null;
  loading = true;
  error = false;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  } 
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: resp => {
        this.weatherData = resp;
        this.loading = false;
        this.error = false;
        this.cityName = '';
      },
      error: err => {
        this.weatherData = null;
        this.loading = false;
        this.error = err.error.message;
      }
    })
  }
}
