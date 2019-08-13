import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../api.service';
import { ApigatewayService } from '../apigateway.service';
import { Router } from '@angular/router';
declare let $;
@Component({
  selector: 'app-display-resource',
  templateUrl: './display-resource.component.html',
  styleUrls: ['./display-resource.component.scss']
})
export class DisplayResourceComponent implements OnInit {


  @Input() region: [];
  @Input() ad: string[];
  @Input() tier: string[];
  @Input() platform: [];
  @Input() os: [];
  selectedRegion: string;
  selectedAd: string;
  selectedTier: string;
  selectedPlatform: string;
  selectedOS: string;
  completed = false;
  regionvars: string;
  firstname;
  lastname;
  email;
  image;
  sha;
  @Output() emittedRegion: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedAd: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedTier: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedPlatform: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedOS: EventEmitter<string> = new EventEmitter<string>();

  constructor( private apiServices: ApiService, private router: Router ) { }

  ngOnInit() {
  }

  dropRegion(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.selectedRegion = event.container.data[0];
    this.emittedRegion.emit(this.selectedRegion);
    $('.carousel').carousel('next');

  }

  dropAd(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.selectedAd = event.container.data[0];
    this.emittedAd.emit(this.selectedAd);
    if( this.selectedAd === 'AD1'){
      this.ad = [];
      this.ad.push('AD ID');
    }
    $('.carousel').carousel('next');

  }

  dropTier(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.selectedTier = event.container.data[0];
    this.emittedTier.emit(this.selectedTier);
    if ( this.selectedTier === 'Tier1' ) {
      this.tier = [];
      this.tier.push('Subnet');
    }
    $('.carousel').carousel('next');

  }

  dropPlatform(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.selectedPlatform = event.container.data[0];
    this.emittedPlatform.emit(this.selectedPlatform);
    $('.carousel').carousel('next');
    this.completed = true;

  }

  deploy() {
    console.log('calling api to pass variables.tf file');
    this.firstname = localStorage.getItem('fn');
    this.lastname = localStorage.getItem('ln');
    this.email = localStorage.getItem('email');
    this.image = localStorage.getItem('image');
    localStorage.setItem('Region',this.selectedRegion);
    localStorage.setItem('AD',this.selectedAd);
    localStorage.setItem('Tier',this.selectedTier);
    localStorage.setItem('Platform',this.selectedPlatform);
    this.regionvars = `variable "region" {
                        default = "${this.selectedRegion}"  
                      }
                      variable "fn"{
                        default = "${this.firstname}"
                      }
                      variable "ln"{
                        default = "${this.lastname}"
                      }
                      variable "email"{
                        default = "${this.email}"
                      }
                     
                     `;
    // this.apiServices.postRegionVars(this.regionvars)
    
    // this.apiServices.updateRegionData(this.regionvars)
    // .subscribe(data =>{
    //   console.log('getting the response');
    //   console.log('====response data====', JSON.parse(JSON.stringify(data)));
    //   localStorage.setItem('ocid',data);
    //   console.log('===data from local storage===', localStorage.getItem('ocid'));

    // });
    // this.apiServices.getJobState()
    // .subscribe(data => {
    //   console.log(data.lifecycleState);
    // });
    this.apiServices.getContent()
    .subscribe(data => {
      console.log("sha", data.sha);
      this.sha = data.sha;
      var content = `{ "sha" : "${this.sha}","content" : "${btoa(this.regionvars)}"}`
      var result = JSON.parse(content);
      this.apiServices.putContent(result)
      .subscribe( result => {
        console.log("output of putcontent" , result);
       
      })
      this.apiServices.getOcid()
      .subscribe( id =>{
        console.log("ocid of the job", id);
        localStorage.setItem('ocid',id);
      })
    })
    this.router.navigateByUrl('/loader');

  }

}
