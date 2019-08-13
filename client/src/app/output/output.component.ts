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
  // progressbarValue = 0;
  // curSec: number = 100;
 

  ngOnInit() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     /** spinner ends after 20 seconds */
  //     this.spinner.hide();
  //     this.startTimer(20);
  // }, 5000);

  this.dataSource = [];
  this.dataSource.push({
    number : "1",
    name    : this.region,
    description : "Region",
    status      : "created"
  });
  this.dataSource.push({
    number : "2",
    name    : this.ad,
    description : "Availability domain",
    status      : "created"
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
        for(this.timeLeft ; this.timeLeft > 0 ; this.timeLeft -- ){
          if(this.timeLeft == 15 || this.timeLeft == 30 || this.timeLeft == 45|| this.timeLeft == 60|| this.timeLeft == 75|| this.timeLeft == 90|| this.timeLeft == 105|| this.timeLeft == 120|| this.timeLeft == 135|| this.timeLeft == 150|| this.timeLeft == 165|| this.timeLeft == 180|| this.timeLeft == 195|| this.timeLeft == 210|| this.timeLeft == 225|| this.timeLeft == 245) {
            
            //console.log("job ocid", this.jobOcid);
            if(this.jobOcid != null){
              this.apiServices.getJobState(this.jobOcid)
              .subscribe( ip => {
                console.log("ip", ip);
                this.id =ip;
                
              });
              
            }
            else{
              console.log("fetching job ocid");
            }
          
          }
        }
        localStorage.setItem("ip",this.id);
        if(this.id.search("Webserver")!=-1){
          this.show = true
        }
       ;
        
    })
   

  }
}
export interface PeriodicElement {
  number : string;
  name: string;
  description: string;
  status: string;
}


