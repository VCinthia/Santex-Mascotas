import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit{

  isLogged : boolean = false;
  
  constructor(
    private tokenService : TokenService,
    private router : Router,
    ){    
  }

  ngOnInit(): void {
    this.tokenService.getIsLoggedSubject().subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }

  logOut() : void{
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }

  closeMenu(checkbox: HTMLInputElement) {
    checkbox.checked = false;
  }
}
