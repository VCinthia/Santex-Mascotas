import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private loginService : LoginService,
    private tokenService : TokenService
  ) { }

  ngOnInit(): void {

  }
}
