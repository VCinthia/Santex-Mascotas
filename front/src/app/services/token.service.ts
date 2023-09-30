import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private isLoggedSubject = new BehaviorSubject<boolean>(this.isLogged());

  constructor() { }

  getIsLoggedSubject() {
    return this.isLoggedSubject.asObservable();
  }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false
  }

  setToken(access_token: string): void {
    localStorage.setItem('access_token', access_token);
    this.isLoggedSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getDniUsuario(): string | null {
    if (!this.isLogged()) {
      return null;
    }    
    const access_token = this.getToken();    
    const payload : any = access_token?.split('.')[1];
    //console.log(`payload: ${payload}`);
    const values = atob(payload);
    //console.log(`values: ${values}`);
    const valueJSON = JSON.parse(values);
    //console.log(`valueJSON: ${valueJSON}`);
    const dniPersona = valueJSON.user.dniPersona;
    console.log(`nombre: ${dniPersona}`);
    return dniPersona;
  }

  getNombreUsuario(): string | null {
    if (!this.isLogged()) {
      return null;
    }    
    const access_token = this.getToken();    
    const payload : any = access_token?.split('.')[1];
    //console.log(`payload: ${payload}`);
    const values = atob(payload);
    //console.log(`values: ${values}`);
    const valueJSON = JSON.parse(values);
    //console.log(`valueJSON: ${valueJSON}`);
    const nombre = valueJSON.user.nombre;
    console.log(`nombre: ${nombre}`);
    return nombre;
  }

  getIdUsuario(): number | null {
    if (!this.isLogged()) {
      return null;
    }    
    const access_token = this.getToken();    
    const payload : any = access_token?.split('.')[1];
    //console.log(`payload: ${payload}`);
    const values = atob(payload);
    //console.log(`values: ${values}`);
    const valueJSON = JSON.parse(values);
    //console.log(`valueJSON: ${valueJSON}`);
    const idUsuario = valueJSON.user.idUsuario;
    console.log(`idUsuario: ${idUsuario}`);
    return idUsuario;
  }

  logOut() : void {
    localStorage.clear();
    this.isLoggedSubject.next(false);
  }
}
