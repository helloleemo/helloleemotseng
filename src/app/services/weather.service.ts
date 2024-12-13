import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }
  private apiUrl = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=`
  private apiKey = `${environment.weatherApiKey}`

  http = inject(HttpClient) // inject HttpClient

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl + this.apiKey)
  }

  
// GET
// getAllData(): Observable<PersonModal[]> {
//   return this.http.get<PersonModal[]>(`${this.mainUrl}/posts`);
// }

// GET by id
// getData(): Observable<PersonModal[]> {
//   return this.http.get<PersonModal[]>(`${this.mainUrl}/posts/1`);
// }

// POST
// insertData(request: PersonModal) {
//   return this.http.post(`${this.mainUrl}/posts`, request, this.options);
// }

// //UPDATE
// updateData(request: PersonModal, id: number) {
//   return this.http.put(`${this.mainUrl}/posts/${id}`, request, this.options);
// }

// DELETEE
// deleteData(id: number) {
//   return this.http.delete(`${this.mainUrl}/posts/${id}`, this.options);
// }

}

