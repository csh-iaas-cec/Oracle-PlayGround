import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localhost_URL : any;
  constructor(public http: HttpClient) {
    this.localhost_URL = '';
   }
  
   postRegionVars(region):  Observable<any>  {
     console.log("===region====",region);
    return this.http.post(`${this.localhost_URL}/api/PostRegionData`, region);
  }
}
