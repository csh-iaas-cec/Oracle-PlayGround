import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../api.service';
import { exit } from 'process';



@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
   displayedColumns = ['number','name', 'description', 'status'];
   public region = localStorage.getItem("Region");
   public ad = localStorage.getItem("AD");
   public tier = localStorage.getItem("Tier");
   public platform = localStorage.getItem("Platform");
   public dataSource :any[];
   timeLeft = 300;
   interval;
   jobOcid;
   message;
   id;
   show:any = false;
  constructor(private spinner: NgxSpinnerService, private apiServices: ApiService ) { }
  ocid:any;
  
 

  ngOnInit() {
  

  this.dataSource = [];
  this.dataSource.push({
    number : "1",
    name    : this.region,
    description : "Region",
    status      : "Selected"
  });
  this.dataSource.push({
    number : "2",
    name    : this.ad,
    description : "Availability domain",
    status      : "Selected"
  });
  this.dataSource.push({
    number : "3",
    name    : this.platform,
    description : "Platform",
    status      : "created"
  });
  this.jobOcid = localStorage.getItem("ocid");
  this.message = JSON.stringify(this.jobOcid);
  console.log("ocid message", this.message);
  console.log("this id" , this.id);
  if(this.message.includes("function failed")){
    this.dataSource.push({
      number : "4",
      name    : "Web-Server",
      description : "Web server inside public subnet",
      status      : "function failed .."
    });
  }
  else if (this.id != null){
    this.dataSource.push({
      number : "4",
      name    : "Web-Server",
      description : "Web server inside public subnet",
      status      : this.id
    });
   
  } else{
    this.dataSource.push({
      number : "4",
      name    : "Web-Server",
      description : "Web server inside public subnet",
      status      : "creating"
    });
  }
  
 
  this.startTimer()
     
  }
  
  startTimer() {
    this.jobOcid = localStorage.getItem("ocid");
    
    this.interval = setInterval(() => {
          if(this.timeLeft>0 && this.timeLeft % 15 == 0) {
            
            
            if(this.jobOcid != null){
              this.apiServices.getJobState(this.jobOcid)
              .subscribe( ip => {
                console.log("ip", ip);
                this.id =ip;
                
              });
              this.timeLeft--;
              if(this.id){
                // this.timeLeft = 0;
                if(this.id.search("Webserver")!=-1){
                  this.show = true
                  this.timeLeft = 0;
                }
                else if( this.id.includes("function failed") || this.id.includes("FAILED")){
                  console.log("function failed");
                  this.show = true
                  this.timeLeft=0;
                }
                else{
                  console.log(this.id);
                }
                
              }
            }
            else{
              console.log("fetching job ocid");
            }
          
          } else if(this.timeLeft>0) {
            console.log("Fetching IP "+ this.timeLeft);
            this.timeLeft -- ;
          }
        localStorage.setItem("ip",this.id);
        
       
        
    }, 1000);
    

  }
}
export interface PeriodicElement {
  number : string;
  name: string;
  description: string;
  status: string;
}


