import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-about-company',
  imports: [NgFor],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss'
})
export class AboutCompanyComponent {
 users:any=[];
  constructor(private userData:UserService) { 
    this.users = this.userData.users;
  }
}
