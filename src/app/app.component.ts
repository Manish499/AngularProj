import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn: boolean;
  constructor(private router: Router){
    this.isUserLoggedIn = false;
    if(localStorage.getItem('userInfo') && !(this.router.url == "/")){
      this.isUserLoggedIn = true;
    }
  }

  removeUser(){
    localStorage.removeItem("userInfo");
    this.router.navigate(['/']);
  }

  userLogout(){
    this.isUserLoggedIn = false;
  }
}
