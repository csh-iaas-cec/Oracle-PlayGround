import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  showBox(item: string){
    if (item === 'Ashburn' || item === 'AD1' || item === 'Tier1' || item === 'Web') {
      return true;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
