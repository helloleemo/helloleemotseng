import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'environment.apiUrl';
  private apiKey = 'environment.apiKey';

  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string): Observable<any> {
    const params = new HttpParams()
      .set('Authorization', this.apiKey)
      .set('locationName', city);
    return this.http.get(`${this.apiUrl}/F-C0032-001`, { params });
  }
}
