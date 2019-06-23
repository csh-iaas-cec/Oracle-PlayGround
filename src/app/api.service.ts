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
    this.localhost_URL = 'https://api.github.com/repos/csh-iaas-cec/Oracle-PlayGround/contents/var.tf';
   }
  
   postRegionVars(region):  Observable<any>  {
     console.log("===region====",region);
     let headers = new HttpHeaders();
     headers.append('Content-Type','application/json');
     headers.append('Authorization','Bearer 8b4f11d2ad7f3eff39935e0ebee1abeb41396e83');
     headers.append('Accept','*/*');
     let bodyObj = {
        message: "my commit message",
        committer: {
          name: "csh-iaas-cec",
          email: "ravi.devarakonda@oracle.com"
        },
        content: region
      
    };
    console.log("====body object ===",bodyObj);
    return this.http.put(`${this.localhost_URL}`,JSON.stringify(bodyObj), {headers: headers})
   
  }
 
}
