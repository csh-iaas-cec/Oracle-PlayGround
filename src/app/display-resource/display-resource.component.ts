import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
declare let $:any;
@Component({
  selector: 'app-display-resource',
  templateUrl: './display-resource.component.html',
  styleUrls: ['./display-resource.component.scss']
})
export class DisplayResourceComponent implements OnInit {


  @Input() region: [];
  @Input() ad: [];
  @Input() tier: [];
  @Input() platform: [];
  @Input() os: [];
  selectedRegion: string;
  selectedAd: string;
  selectedTier: string;
  selectedPlatform: string;
  selectedOS: string;
  completed: boolean = false;
  @Output() emittedRegion: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedAd: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedTier: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedPlatform: EventEmitter<string> = new EventEmitter<string>();
  @Output() emittedOS: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

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
    
  }

}
