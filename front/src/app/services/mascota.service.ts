import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MascotasDTO } from '../models/mascotas.dto';
import { Observable } from 'rxjs';
import { FilterMascotaDto } from '../models/filtermascota.dto';
import { FiltroMascotaDto } from '../models/filtromascotas.dto';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotasURL = environment.mascotasURL;

  constructor(private httpClient: HttpClient) { }

  public getListaMascotas(): Observable<MascotasDTO[]> {
    return this.httpClient.get<MascotasDTO[]>(`${this.mascotasURL}getListMascota`);//ver
  }

  public getMascota(id: number): Observable<MascotasDTO> {
    return this.httpClient.get<MascotasDTO>(`${this.mascotasURL}getMascotaById/${id}`);
  }

  // public createMascota(file : File, mascota : MascotasDTO) : Observable<any> {
  //   return this.httpClient.post<any>(`${this.mascotasURL}createMascota`, {file, mascota});
  // }
  public createMascota(file: File | any, formData: FormData): Observable<any> {
    return this.httpClient.post<any>(`${this.mascotasURL}createMascota`, formData);
  }


  public updateMascota(id: number, mascota: MascotasDTO): Observable<any> {
    return this.httpClient.put<any>(`${this.mascotasURL}updateMascota/${id}`, mascota);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.mascotasURL}deleteMascota/${id}`)
  }

  //filtro mascotas:
  public getListaFiltroMascotas(filtro: any): Observable<FiltroMascotaDto[]> {
    return this.httpClient.post<FiltroMascotaDto[]>(`${this.mascotasURL}buscarMascotas/`, filtro);
  }

}
