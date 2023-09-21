import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../models/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  userURL : string = environment.userURL;

  constructor(private httpClient: HttpClient) { }

  createUser(userDTO: UserDTO): Observable<any> {
    return this.httpClient.post<any>(this.userURL+'createUsuario', userDTO);
  }
  //createUser(userDTO: UserDTO): Observable<any> {
  //const headers = new HttpHeaders({
  //  'Content-Type': 'application/json'
  //});

  //return this.httpClient.post<any>(this.userURL + 'createUsuario', JSON.stringify(userDTO), { headers });
  // }
}
