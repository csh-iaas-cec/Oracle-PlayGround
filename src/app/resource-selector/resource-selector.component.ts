import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-selector',
  templateUrl: './resource-selector.component.html',
  styleUrls: ['./resource-selector.component.scss']
})
export class ResourceSelectorComponent implements OnInit {

  @Input() items: string[];

  @Input() isTier: boolean;

  @Input() isTier1: boolean;

  @Input() isTier2: boolean;

  constructor() { }

  ngOnInit() {
  }


}
