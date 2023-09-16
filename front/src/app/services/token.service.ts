import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token : string) : void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (token !== null) {
      return token;
    } else {
      // Manejar el caso en que el token sea null, posiblemente lanzar una excepción o devolver un valor predeterminado.
      return ''; // O cualquier otro valor predeterminado que desees usar
    }
  }
  
}
