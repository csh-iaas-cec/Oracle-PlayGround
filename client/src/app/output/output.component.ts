import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  ocid:any;
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 20 seconds */
      this.spinner.hide();
      this.startTimer(20);
  }, 5000);
   
  }
  progressbarValue = 0;
  curSec: number = 100;

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 0 + sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        this.ocid=localStorage.getItem('ocid');
        sub.unsubscribe();
      }
    });
  }
}
