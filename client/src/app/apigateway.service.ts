import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApigatewayService {

  
  localhost_URL : any;
  constructor(public http: HttpClient) {
    this.localhost_URL = 'http://localhost:3200';
   }
}
