import { Component, OnInit } from '@angular/core';
import { LoginService } from '../resources/services/login.service';
import { RequestLogin } from '../resources/models/RequestLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private loginservice: LoginService) { }
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void{
    this.loginservice.doLogin(this.requestLogin).subscribe(data => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    }
    );
  }

}
