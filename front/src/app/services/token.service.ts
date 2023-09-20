import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false
  }

  setToken(access_token: string): void {
    localStorage.setItem('token', access_token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getEmailUsuario(): string | null {
    if (!this.isLogged()) {
      return null;
    }
    const access_token = this.getToken();
    const payload : any = access_token?.split('.')[1];
    const values = atob(payload);
    const valueJSON = JSON.parse(values);
    const emailUsuario = valueJSON.emailUsuario;

    return emailUsuario;
  }

  logOut() : void {
    localStorage.clear();
  }
}
