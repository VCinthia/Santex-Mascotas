import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CiudadDTO } from '../models/ciudad.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  ciudadURL = environment.ciudadURL;

  constructor(private httpClient: HttpClient) { }

  public getListaCiudad() : Observable<CiudadDTO[]> {
    return this.httpClient.get<CiudadDTO[]>(`${this.ciudadURL}getListaCiudades`);
  }

  public getCiudad(id : number) : Observable<CiudadDTO> {
    return this.httpClient.get<CiudadDTO>(`${this.ciudadURL}getCiudadById/${id}`);
  }

  public createCiudad(nombre : string, ciudad : CiudadDTO) : Observable<any> {
    return this.httpClient.post<any>(`${this.ciudadURL}createCiudad/${nombre}`, ciudad);
  }

  public updateCiudad(id : number, ciudad : CiudadDTO) : Observable<any> {
    return this.httpClient.put<any>(`${this.ciudadURL}updateCiudad/${id}`, ciudad);
  }
  
  public delete(id:number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.ciudadURL}deleteCiudad/${id}`)
  }
}
