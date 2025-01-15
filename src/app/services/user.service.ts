import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { 

  }

  users = [
    {name:'deepak',email:'d@e.com',password:'1234'},
    {name:'vishal',email:'v@e.com',password:'1234'},
    {name:'rohit',email:'r@e.com',password:'1234'},
    {name:'sonu',email:'s@e.com',password:'1234'},
    {name:'nikhil',email:'n@e.com',password:'1234'}
  ]
}
