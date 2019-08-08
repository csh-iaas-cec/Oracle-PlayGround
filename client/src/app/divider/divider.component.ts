import { Component } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {

  items = [
    'Ashburn',
    'Phoenix',
    'Frankfurt',
    'London',
    'Toronto'
  ];

  ads = [
    'XqVg:US-ASHBURN-AD-1',
    'XqVg:US-ASHBURN-AD-2',
    'XqVg:US-ASHBURN-AD-3'
  ];

  tiers = [
    'Tier1',
    'Tier2'
  ];

  platforms = [
    'Web',
    'Web/Database'
  ];

 
  // OSs = [
  //   'Linux',
  //   'Windows'
  // ];

  region = [];

  ad = [];

  tier = [];

  platform = [];

  

  // os = [];

  selectedRegion: string;
  selectedAd: string;
  selectedTier: string;
  selectedPlatform: string;
  // selectedOS: string;

  getRegion(emitRegion: string): void {
    this.selectedRegion = emitRegion;
  }
  getAd(emitAd: string): void {
    this.selectedAd = emitAd;
  }
  getTier(emitTier: string): void {
    this.selectedTier = emitTier;
  }
  getPlatform(emitPlatform: string): void {
    this.selectedPlatform = emitPlatform;
  }
  // getOS(emitOS: string): void {
  //   this.selectedOS = emitOS;
  // }
  onClick() {
    console.log(this.selectedRegion);
    console.log(this.selectedAd);
    console.log(this.selectedPlatform);
    // console.log(this.selectedOS);
    console.log(this.selectedTier);
  }

  



}
