import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
@Component({

  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit{

  isLogged : boolean = false //boolean | any ;

  

  constructor(
    private tokenService : TokenService,
    private router : Router
    ){
    
  }

  ngOnInit(): void {
    this.tokenService.getIsLoggedSubject().subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
    //this.tokenService.isLogged() ? this.isLogged = true : this.isLogged = false;
  }


  logOut() : void{
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }
}
