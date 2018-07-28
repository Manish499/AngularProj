import { Component, OnInit } from '@angular/core';
import { Router }          from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'app';
  user = {email: '', password: '', confirmPassword:''};
  // router: Router;

  constructor(private router: Router){
  }

  ngOnInit() {
    // thilocalStorage.getItem('userInfo');
  }

  onSubmit(event){
    if(this.user.password !== this.user.confirmPassword){
      alert("Confirm Password doesn't match");
      this.user = {email: '', password: '', confirmPassword:''};
    }else{
      localStorage.setItem('userInfo', JSON.stringify(this.user));
    this.router.navigate(['/app-home']);
    }
    
  }
}
