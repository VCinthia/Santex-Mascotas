import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { LoginUserDTO } from '../models/login.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = environment.loginURL;

  constructor(private httpClient: HttpClient) { }

  public login(loginDTO: LoginUserDTO): Observable<any> {
    return this.httpClient.post<any>(this.loginURL + 'login', loginDTO);
  }
}
