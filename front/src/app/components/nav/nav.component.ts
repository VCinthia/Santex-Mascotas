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

  isLogged : boolean = false //boolean | any ;
  
  constructor(
    private tokenService : TokenService,
    private router : Router,
    private scrollService: ScrollService
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

  // scrollToSection(sectionId: string) {
  //   this.scrollService.scrollToSection(sectionId);
  // }
  
  //ESTA ES LA QUE FUNCIONABA EN CINTHIA
  //scrollToSection(sectionId: string, event: Event) {
    //event.preventDefault(); //Evita que la página se actualice
    //this.scrollService.scrollToSection(sectionId);
  //}
  
  // scrollToSection(sectionId: string) {
  //   this.scrollService.scrollToSection(sectionId);
  // }
  

//export class NavComponent {
  closeMenu(checkbox: HTMLInputElement) {
    checkbox.checked = false;
  }

}
