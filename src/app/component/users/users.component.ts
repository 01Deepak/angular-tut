import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  userId:string|null='';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
