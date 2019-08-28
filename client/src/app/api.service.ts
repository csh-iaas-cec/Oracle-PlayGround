import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  localhost_URL: any;
  constructor(public http: HttpClient) {
    this.localhost_URL = 'https://132.145.141.18';
  }

  getJobState(jobId): Observable<any> {
    return this.http.post(`${this.localhost_URL}/api/getJob`,{jobId},{responseType: 'text'});
  }

  getContent(): Observable<any>  {
    return this.http.get(`${this.localhost_URL}/api/getContent`);
  }

  putContent(content): Observable<any>  {
    
    console.log("content", content);
    return this.http.put(`${this.localhost_URL}/api/putContent`,{content});
  }

  getOcid(): Observable<any> {
    return this.http.get(`${this.localhost_URL}/api/getOcid`, {responseType: 'text'});
  }

  putDetails(fname, lname, email, image): Observable<any> {
    return this.http.get(`${this.localhost_URL}/api/putDetails?fname=` + fname + `&lname=` + lname + `&email=` + email + `&image=` + image , {responseType: 'text'});
  }

}
