import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { MatSelectModule } from '@angular/material/select';
import {  MatCardModule } from '@angular/material/card';
import { TemplateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-api',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatCardModule,TemplateComponent,MatIconModule],
  templateUrl: './weather-api.component.html',
})
export class WeatherApiComponent implements OnInit {

  weatherService = inject(WeatherService);
  weatherData: any = null;

  locations: any[] = [];
  selectedLocation: string = '';

  ngOnInit() {
    this.getLocations();
  }

  getInfo(){
    this.getSpecificWeather();
    this.renderData();
  }




// Other methods

  getLocations(): void {
    this.weatherService.getWeatherData().subscribe({
      next: (res) => {
        const locations = res.records.Locations[0]?.Location;
        if (locations && locations.length > 0) {
          this.locations = locations.map((loc: any) => { return loc.LocationName });
          // console.log(this.locations);

        }
      }
    })
  }

  getSpecificWeather(): void {
    this.weatherService.getWeatherData().subscribe(
      {
        next: (res) => {
          const locations = res.records.Locations[0]?.Location;
          if (locations && locations.length > 0) {
            const selected = locations.find((loc: any) => {
              return loc.LocationName === this.selectedLocation
            }
            );
            // console.log(selected);
            this.weatherData = selected?.WeatherElement;
            console.log(this.weatherData);
          }

        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete!!')
        }
      },
    )

  }

  renderData(){
    console.log(this.weatherData);
  }

  // test() {
  //   console.log(this.weatherData)
  // }

}
