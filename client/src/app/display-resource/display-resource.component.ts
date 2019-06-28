import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../api.service';
import { ApigatewayService } from '../apigateway.service';
declare let $:any;
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
  completed: boolean = false;
  regionvars: string;
  @Output() emittedRegion: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedAd: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedTier: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedPlatform: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedOS: EventEmitter<string> = new EventEmitter<string>();

  constructor( private apiServices : ApiService, private apigatewayServices : ApigatewayService ) { }

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

  deploy(){
    console.log("calling api to pass variables.tf file");
    this.regionvars = `variable "region" {
                        default = "${this.selectedRegion}"  
                      }`;
    // this.apiServices.postRegionVars(this.regionvars)
    this.apiServices.updateRegionData(this.regionvars)
    .subscribe(data =>{
      console.log("====response data====",data);
    });
    
  }

}
