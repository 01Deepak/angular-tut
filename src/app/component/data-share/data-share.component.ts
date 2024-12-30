import { Component } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-data-share',
  imports: [ChildComponentComponent],
  templateUrl: './data-share.component.html',
  styleUrl: './data-share.component.scss'
})
export class DataShareComponent {
users: any = [
  {name: 'John', age: 30 , address: '123 Main St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
  {name: 'Jane', age: 25 , address: '456 Elm St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
  {name: 'Bob', age: 35 , address: '789 Oak St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},  
  {name: 'Alice', age: 28 , address: '101 Pine St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
  {name: 'Mike', age: 32 , address: '202 Maple St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
  {name: 'Sarah', age: 27 , address: '303 Cedar St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']}, 
  {name: 'John', age: 30 , address: '123 Main St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
  {name: 'Jane', age: 25 , address: '456 Elm St', socialAccounts: ['Facebook', 'Twitter', 'Instagram']},
];
}
