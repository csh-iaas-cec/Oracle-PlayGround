import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstname;
  lastname;
  email;
  image;

  constructor( private apiServices: ApiService, private router: Router  ) { }

  
 // toggle webcam on/off
 public showWebcam = false;
 public picture = null;
 public allowCameraSwitch = true;
 public multipleWebcamsAvailable = false;
 public deviceId: string;
 public videoOptions: MediaTrackConstraints = {
   // width: {ideal: 1024},
   // height: {ideal: 576}
 };
 public errors: WebcamInitError[] = [];

 // latest snapshot
 public webcamImage: WebcamImage = null;

 // webcam snapshot trigger
 private trigger: Subject<void> = new Subject<void>();
 // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
 private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  private focusoutfn(event) {
    console.log('FN', event.target.value);
    localStorage.setItem("fn",event.target.value);
  }
  private focusoutln(event) {
    console.log('LN', event.target.value);
    localStorage.setItem("ln",event.target.value);
  }
  private focusoutemail(event) {
    console.log('Email', event.target.value);
    localStorage.setItem("email",event.target.value);
  }
  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

 public triggerSnapshot(): void {
   this.trigger.next();
 }

 public toggleWebcam(): void {
   this.showWebcam = !this.showWebcam;
 }

 public handleInitError(error: WebcamInitError): void {
   this.errors.push(error);
 }

 public showNextWebcam(directionOrDeviceId: boolean|string): void {
   // true => move forward through devices
   // false => move backwards through devices
   // string => move to device with given deviceId
   this.nextWebcam.next(directionOrDeviceId);
 }

 public handleImage(webcamImage: WebcamImage): void {
   console.info('received webcam image', webcamImage);
   console.log('image url', webcamImage.imageAsDataUrl);
   localStorage.setItem('image', webcamImage.imageAsDataUrl);
   this.webcamImage = webcamImage;
   this.showWebcam = false;
   this.picture = localStorage.getItem('image');
 }

 public cameraWasSwitched(deviceId: string): void {
   console.log('active device: ' + deviceId);
   this.deviceId = deviceId;
 }

 public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
 }

 public get nextWebcamObservable(): Observable<boolean|string> {
   return this.nextWebcam.asObservable();
 }


 execute() {
  this.firstname = localStorage.getItem('fn');
  this.lastname = localStorage.getItem('ln');
  this.email = localStorage.getItem('email');
  this.image = localStorage.getItem('image');

  this.apiServices.putDetails(this.firstname, this.lastname, this.email, this.image)
  .subscribe(data => {
    console.log(data);
  });

  this.router.navigateByUrl('/playground');
  localStorage.removeItem('image');

 }
}
