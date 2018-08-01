import { Component, OnInit } from '@angular/core';
import { UserType } from '../user-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInfo: UserType;
  constructor() {
    this.userInfo = new UserType();
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

   }

  ngOnInit() {
    // this.user = localStorage.getItem('userInfo');
  }

}
