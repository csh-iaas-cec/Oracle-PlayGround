import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  

  localhost_URL : any;
  constructor(public http: HttpClient) {
    this.localhost_URL = 'http://localhost:3200';
  }

  getJobState(): Observable<any> {
    return this.http.get(`${this.localhost_URL}/api/getJob`);
  }
  
   postRegionVars(region):  Observable<any>  {

    return this.http.get(`${this.localhost_URL}/api/getContent`)
   
  }

  updateRegionData(region): Observable<any> {

    return this.http.get(`${this.localhost_URL}/api/getOcid`, {responseType: 'text'});
    
  }
 
}
