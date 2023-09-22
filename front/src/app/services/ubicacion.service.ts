import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BarrioDTO } from '../models/ubicacion.dto';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  ubicacionURL = environment.ubicacionURL;

  constructor(private httpClient: HttpClient) { }

  public getListaUbicacion() : Observable<BarrioDTO[]> {
    return this.httpClient.get<BarrioDTO[]>(`${this.ubicacionURL}getListaBarrios`);
  }

  public getUbicacion(id : number) : Observable<BarrioDTO> {
    return this.httpClient.get<BarrioDTO>(`${this.ubicacionURL}getBarrioById/${id}`);
  }

  public createUbicacion( barrio : BarrioDTO) : Observable<any> {
    return this.httpClient.post<any>(`${this.ubicacionURL}nuevoBarrio`, barrio);
  }

  public updateUbicacion(id : number, barrio : BarrioDTO) : Observable<any> {
    return this.httpClient.put<any>(`${this.ubicacionURL}updateBarrio/${id}`, barrio);
  }
  
  public delete(id:number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.ubicacionURL}deleteBarrio/${id}`)
  }
}
