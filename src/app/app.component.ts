import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragndrop';

  numbers: number[] = [];
  otherNumbers: number[] = [];

  constructor() {
    for (let i = 0; i<10; i++) {
      this.numbers.push(i); 
    }
  }

  drop (event: CdkDragDrop<number[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
