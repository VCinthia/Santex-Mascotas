export class FilterMascotaDto {
    especie: string;
    color: string;
    tamanio: string;
    zona: string;
    estado: string;

   constructor(
     )
     {
      this.especie = '';
      this.color = '';
      this.tamanio = '';
      this.zona = '';
      this.estado = '';
   }
}

// filtermascota.dto.ts en el front

// import { HttpParams } from '@angular/common/http';

// export class FilterMascotaDto {
//   especie: string;
//   color: string;
//   tamanio: string;
//   zona: string;
//   estado: string;

//   constructor() {
//     this.especie = '';
//     this.color = '';
//     this.tamanio = '';
//     this.zona = '';
//     this.estado = '';
//   }

//   // Función para convertir el objeto en HttpParams
//   toHttpParams(): HttpParams {
//     let params = new HttpParams();
//     if (this.especie) {
//       params = params.set('especie', this.especie);
//     }
//     if (this.color) {
//       params = params.set('color', this.color);
//     }
//     if (this.tamanio) {
//       params = params.set('tamanio', this.tamanio);
//     }
//     if (this.zona) {
//       params = params.set('zona', this.zona);
//     }
//     if (this.estado) {
//       params = params.set('estado', this.estado);
//     }
//     return params;
//   }
// }
