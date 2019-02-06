import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragndrop';

  numbers: number[] = [];

  constructor() {
    for (let i = 0; i<1000; i++) {
      this.numbers.push(i); 
    }
  }

  drop (event: CdkDragDrop<number[]>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }
}
