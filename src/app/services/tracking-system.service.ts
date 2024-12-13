import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {

  constructor(private http: HttpClient) {}
  // http = inject(HttpClient) <-- DON'T USE THIS!! IT WILL NOT WORK QQ !!

  milestoneApiUrl = environment.milestoneApiUrl;
  flightApiUrl = environment.flightApiUrl;
  fileApiUrl = environment.fileApiUrl;

  

  getMilestoneData():Observable<any>{
    return this.http.get(this.milestoneApiUrl)
  }
  getFlightsData():Observable<any>{
    return this.http.get(this.flightApiUrl)
  }

  getFilesData():Observable<any>{
    return this.http.get(this.fileApiUrl)
  }

}