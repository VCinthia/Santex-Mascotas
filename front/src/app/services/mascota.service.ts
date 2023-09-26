import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MascotasDTO } from '../models/mascotas.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotasURL = environment.mascotasURL;

  constructor(private httpClient: HttpClient) { }

  public getListaMascotas() : Observable<MascotasDTO[]> {
    return this.httpClient.get<MascotasDTO[]>(`${this.mascotasURL}getListMascota`);//ver
  }

  public getMascota(id : number) : Observable<MascotasDTO> {
    return this.httpClient.get<MascotasDTO>(`${this.mascotasURL}getMascotaById/${id}`);
    // return this.httpClient.get<MascotasDTO>(`${this.mascotasURL}`+'getMascotaById/'+ `${id}`)
  }

  public createMascota(mascota : MascotasDTO) : Observable<any> {
    return this.httpClient.post<any>(`${this.mascotasURL}createMascota`, mascota);
    // return this.httpClient.post<any>(this.mascotasURL+'createMascota', mascota);
  }

  public updateMascota(id : number, mascota : MascotasDTO) : Observable<any> {
    return this.httpClient.put<any>(`${this.mascotasURL}updateMascota/${id}`, mascota);
  }
  
  public delete(id:number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.mascotasURL}deleteMascota/${id}`)
  }

  //filtro mascotas:
  public getListaFiltroMascotas(filtro: any): Observable<MascotasDTO[]> {
    return this.httpClient.get<MascotasDTO[]>(
      `${this.mascotasURL}buscarMascotas`,
      { params: filtro } // Asegúrate de ajustar el objeto 'filtro' según tu necesidad
    );
  }

}
