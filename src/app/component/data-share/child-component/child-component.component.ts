import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-child-component',
  imports: [NgFor],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @Input() users: any = [];
  @Output() dataToParent = new EventEmitter<any>();
  @Output() inputDataEvent = new EventEmitter<any>();


shareData(data: any) {
  this.dataToParent.emit(data);
}

handleSaveClick(data: any) {
  this.inputDataEvent.emit(data);
}
}
