import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router) { }
  showfirst:any = false;
  showsecond:any = false;
  showthird = false;
  showfourth = false;
  showfifth = false;
  showsix = false;
  showseven = false;
  showeight = false;
  timeLeft = 60;
  interval;

  ngOnInit() {
    this.startTimer();
  }
  startTimer() {
    this.showfirst = true;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0 && this.timeLeft == 55 || this.timeLeft == 20) {
        this.showfirst = false;
        this.showsecond =  true;
        this.showthird = false;
        this.showfourth = false;
        this.showfifth = false;
        this.showsix = false;
        this.showseven = false;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 50 || this.timeLeft == 15){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = true;
        this.showfourth = false;
        this.showfifth = false;
        this.showsix = false;
        this.showseven = false;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 45 || this.timeLeft == 10){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = false;
        this.showfourth = true;
        this.showfifth = false;
        this.showsix = false;
        this.showseven = false;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 40 || this.timeLeft == 5){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = false;
        this.showfourth = false;
        this.showfifth = true;
        this.showsix = false;
        this.showseven = false;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 35){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = false;
        this.showfourth = false;
        this.showfifth = false;
        this.showsix = true;
        this.showseven = false;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 30){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = false;
        this.showfourth = false;
        this.showfifth = false;
        this.showsix = false;
        this.showseven = true;
        this.showeight = false;
        this.timeLeft--;
      }else if ( this.timeLeft > 0 && this.timeLeft == 25){
        this.showfirst = false;
        this.showsecond =  false;
        this.showthird = false;
        this.showfourth = false;
        this.showfifth = false;
        this.showsix = false;
        this.showseven = false;
        this.showeight = true;
        this.timeLeft--;
      }
      else if (this.timeLeft > 0){
        this.timeLeft--;
      }
       else {
        this.timeLeft = 60;
        // this.router.navigate(['/output']);

      }
    },1000)
    // for(var i =0 ; i < 100 ; i++){
    //   if(i === 20 ){
    //     this.showfirst= false;
    //     this.showsecond = true;
    //   }
    //   if(i === 40 ){
    //     this.showfirst= true;
    //     this.showsecond = false;
    //   }
    //   if(i === 60 ){
    //     this.showfirst= false;
    //     this.showsecond = true;
    //   }
    // }
    // const time = seconds;
    // const timer$ = interval(1000);

    // const sub = timer$.subscribe((sec) => {
    //   this.progressbarValue = 0 + sec * 100 / seconds;
    //   console.log("progress", this.progressbarValue);
    //   if(sec === 20){
    //     this.showfirst =  false;
    //     this.showsecond = true;
    //   }
    //   this.curSec = sec;

    //   // if (this.curSec === seconds) {
    //   //   this.ocid = localStorage.getItem('ocid');
    //     sub.unsubscribe();
    //   // }
    // });
  }

}
