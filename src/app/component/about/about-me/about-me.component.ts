import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [NgFor],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  users:any=[];
  constructor( private userData:UserService){
    console.log(this.userData.users);
    this.users = this.userData.users;
  }

}
