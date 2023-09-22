import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EspecieDTO } from '../models/especie.dto';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  especieURL = environment.especieURL;

  constructor(private httpClient: HttpClient) { }

  public getListaEspecies() : Observable<EspecieDTO[]> {
    return this.httpClient.get<EspecieDTO[]>(`${this.especieURL}getListaEspecies`);
  }

  public getEspecie(id : number) : Observable<EspecieDTO> {
    return this.httpClient.get<EspecieDTO>(`${this.especieURL}getEspecieById/${id}`);
  }

  public createEspecie( nombreEspecie: string, especie : EspecieDTO) : Observable<any> {
    return this.httpClient.post<any>(`${this.especieURL}nuevaEspecie/${nombreEspecie}`, especie);
  }

  public updateEspecie(id : number, especie : EspecieDTO) : Observable<any> {
    return this.httpClient.put<any>(`${this.especieURL}updateEspecie/${id}`, especie);
  }
  
  public delete(id:number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.especieURL}deleteEspecie/${id}`)
  }
}
