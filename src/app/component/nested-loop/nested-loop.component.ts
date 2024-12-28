import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-nested-loop',
  imports: [NgFor,NgIf],
  templateUrl: './nested-loop.component.html',
  styleUrl: './nested-loop.component.scss'
})
export class NestedLoopComponent {
  users=[
    {
      name: 'John', age: 30,
      address: {
        street: '123 Main St', city: 'New York', state: 'NY', zip: '10001'
      },
    socialAccounts:[
      'Facebook', 'Twitter', 'Instagram'
    ]
  },
  {
    name: 'Jane', age: 25,
    address: {
      street: '456 Elm St', city: 'San Francisco', state: 'CA', zip: '94102'
    },
    socialAccounts: [
      'Facebook', 'Twitter', 'Instagram'
    ]
  },
  {
    name: 'Bob', age: 35,
    address: {
      street: '789 Oak St', city: 'Los Angeles', state: 'CA', zip: '90001'
    },
    socialAccounts: [
      'Facebook', 'Twitter', 'Instagram'
    ]
  },
  {
    name: 'Alice', age: 40,
    address: {
      street: '101 Pine St', city: 'Seattle', state: 'WA', zip: '98101'
    },
    socialAccounts: [
      'Facebook', 'Twitter', 'Instagram'
    ]
  }
  ]
}
