import { filter } from 'rxjs';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { TemplateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-weather-api',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatCardModule, TemplateComponent, MatIconModule],
  templateUrl: './weather-api.component.html',
})
export class WeatherApiComponent implements OnInit {

  weatherService = inject(WeatherService);
  weatherData: any = null;

  locations: any[] = [];

  // card Info
  selectedLocation: string = '';
  today: { year: number, month: number, day: number } = { year: 0, month: 0, day: 0 };

  maxTemp: number = 0;
  minTemp: number = 0;
  nowTemp: number = 1000;
  description: string = '';

  ngOnInit() {
    this.getLocations();
  }

  getInfo() {
    this.getSpecificWeather();
    this.getDate();
  }




  // Other methods

  getLocations(): void {
    this.weatherService.getWeatherData().subscribe({
      next: (res) => {
        // console.log('res', res);
        // 結構：records:{Locations:[0].Location:[{LocationName[0].WeatherElement[0].Time[0].ElementValue[0].Temperature}]}
        const locations = res.records.location;
        if (locations && locations.length > 0) {
          this.locations = locations.map((loc: any) => { return loc.locationName });
        }
      },
      error: (err) => { console.log(err) }
    })
  }

  getSpecificWeather(): void {
    this.weatherService.getWeatherData().subscribe(
      {
        next: (res) => {
          // 結構：records:{Locations:[0].Location:[{LocationName[0].WeatherElement[0].Time[0].ElementValue[0].Temperature}]}
          const locations = res.records.location;
          // // console.log('locations', locations);
          if (locations && locations.length > 0) {
            const selected = locations.find((el: any) =>
              el.locationName === this.selectedLocation);
            // // console.log('selected', selected);
            if (selected) {
              const weatherInfo = selected.weatherElement;
              // console.log('weatherInfo????', weatherInfo);
              const MaxT = weatherInfo.find((el: any) => el.elementName === "MaxT");
              const MinT = weatherInfo.find((el: any) => el.elementName === "MinT");
              const CI = weatherInfo.find((el: any) => el.elementName === "CI");
              const Wx = weatherInfo.find((el: any) => el.elementName === "Wx");

              // Maxtemp
              if (MaxT && MaxT.time) {
                const maxTemp = MaxT.time.map((time: any) =>
                  Number(time.parameter?.parameterName)
                );
                this.maxTemp = Math.max(...maxTemp);
                // console.log('maxTemp', this.maxTemp);
              } else {
                // console.log('還是找不到?');
              }

              // MinTempr
              if (MinT && MinT.time) {
                const minTemp = MinT.time.map((time: any) =>
                  Number(time.parameter?.parameterName)
                );
                this.minTemp = Math.min(...minTemp);
              }

              // Descrpition
              if (CI && CI.time) {
                this.description = CI.time[1].parameter.parameterName;
                // console.log('nowTemp:', this.description);
              }

              // nowTemp
              if (MinT && MinT.time) {
                this.nowTemp = MinT.time[1].parameter.parameterName;
                // console.log('nowtepm:', this.nowTemp);
              }

            }

          }
        },
        error: (err) => {
          // console.log(err);
        },
        complete: () => {
          // console.log('complete!!')
        }
      },
    )

  }

  getDate() {
    const date = new Date();
    this.today.year = date.getFullYear();
    this.today.month = date.getMonth() + 1; // getMonth starts from 0
    this.today.day = date.getDate();
  }

  get bgColor(): string {
    if (this.selectedLocation !=='' && this.nowTemp > 20) return 'hot';
    if (this.selectedLocation !=='' && this.nowTemp >= 10 && this.nowTemp <= 20) return 'mild';
    if (this.selectedLocation !=='' && this.nowTemp < 10) return 'cold';
    return 'mild';
  }

  // test() {
  //   // console.log(this.weatherData)
  // }

}
