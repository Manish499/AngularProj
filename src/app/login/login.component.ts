import { Component, OnInit } from '@angular/core';
import { Router }          from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo : {email: '', password: ''};
  userEnter = {email: '', password:''};
  constructor(private router: Router) { 
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {
  }

  onSubmit(event){
    if(this.userInfo.email === this.userEnter.email){
      this.router.navigate(['/app-home']);
    }else{
      alert("User is not registered. Please register yourself");
    }
  }

}
