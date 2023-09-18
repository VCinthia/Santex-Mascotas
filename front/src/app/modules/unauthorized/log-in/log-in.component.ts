import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDTO } from 'src/app/models/login.dto';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent /*implements OnInit*/ {

  // user : LoginUserDTO = null;

  // constructor(
  //   private loginService : LoginService,
  //   private tokenService : TokenService,
  //   private toastrService : ToastrService,
  //   private router : Router
  // ) { }

  // ngOnInit(): void {

  // }

  // onLogin() : void {
  //   this.user = new LoginUserDTO()
  // }
}
