import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 匯入 FormsModule
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-api',
  standalone: true,
  imports: [CommonModule, FormsModule], // 在 imports 陣列中加入 FormsModule
  templateUrl: './weather-api.component.html',
})
export class WeatherApiComponent {
  cityName: string = ''; // 用於綁定使用者輸入的城市名稱
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (this.cityName.trim()) {
      this.weatherService.getWeatherForecast(this.cityName.trim()).subscribe({
        next: (res) => {
          this.weatherData = res.records.location[0];
          console.log('Weather Data:', this.weatherData);
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        },
      });
    } else {
      alert('請輸入有效的城市名稱');
    }
  }
}
