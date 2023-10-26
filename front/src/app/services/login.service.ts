import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { LoginUserDTO } from '../models/login.dto';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = environment.loginURL;
  userURL = environment.userURL;

  constructor(private httpClient: HttpClient) { }

  login(loginDTO: LoginUserDTO): Observable<any> {
    return this.httpClient.post<any>(this.loginURL + 'login', loginDTO);
  }

  usuarioById(id : number): Observable<any> {
    return this.httpClient.get<any>(`${this.userURL}${id}`)
  }
}
