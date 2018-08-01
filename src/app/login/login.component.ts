import { Component, OnInit } from '@angular/core';
import { Router }          from '@angular/router';
import { UserType } from '../user-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registeredUser : UserType;
  userEnter : UserType;
  constructor(private router: Router) { 
    // this.registeredUsers = new Array<UserType>();
     this.userEnter = new UserType();
    this.registeredUser = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {
  }

  onSubmit(event){
    this.userEnter.confirmPassword = this.userEnter.password;
    if(this.registeredUser && (this.registeredUser.email == this.userEnter.email && this.registeredUser.password == this.userEnter.password)){
    // if(this.registeredUsers.includes(this.userEnter)){
      this.router.navigate(['/app-home']);
    }else{
      alert("User is not registered. Please register yourself");
    }
  }

  validateForm(){
    if((this.userEnter.email && this.userEnter.password) != ''){
      return false;
    }else{
      return true;
    }
  }                

}
