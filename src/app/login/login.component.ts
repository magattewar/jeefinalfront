import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;

  constructor(private loginService : LoginService, private router: Router) { 
  // constructor(private router: Router) { 
    this.data = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {

  }

  logon(){
    this.loginService.loginRequest(this.data)
    .subscribe(res => {
      console.log(res);
      this.loginService.saveToken(res.body);
      if(res.body.authorities[0].authority === 'ROLE_MEDECIN'){
          this.router.navigate(['medecin']);
      }
    },
    err => {
      console.log(err);
    });
    // console.log(this.data.username);
    // console.log(this.data.password);
    
  }

}
