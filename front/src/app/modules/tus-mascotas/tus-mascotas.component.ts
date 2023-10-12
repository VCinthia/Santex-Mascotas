import { Component, OnInit } from '@angular/core';

import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tus-mascotas',
  templateUrl: './tus-mascotas.component.html',
  styleUrls: ['./tus-mascotas.component.css'],
})
export class TusMascotasComponent implements OnInit {
  dniPersona: number | null = null;
  idPersona: number | null = null;

  mascotasDTO: MascotasDTO | null = null;
  mascotas: MascotasDTO[] = [];

  mascota: MascotasDTO = new MascotasDTO();

  constructor(
    public mascotasService: MascotaService,
    public tokenService: TokenService,
    public toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.dniPersona = Number(this.tokenService.getDniUsuario());
    this.mascotasService.getMascotaByDni(this.dniPersona).subscribe({
      next: (data) => {
        this.mascotas = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateEstado(mascota: MascotasDTO) {
    //Valor del input- Devuelve 0 o 1
    let estadoForm = (
      document.getElementById(`estado${mascota.idMascota}`) as HTMLInputElement
    ).value;

    //ID del usuario
    this.idPersona = this.tokenService.getIdUsuario();

    //Form Data
    let formData = new FormData();

    console.log(mascota);

    //UpdateMascota
    formData.append('especie', JSON.stringify(mascota));
    formData.append('color', mascota.color);
    formData.append('tamanio', mascota.tamanio);
    formData.append('estado', mascota.estado);
    formData.append('activo', mascota.activo.toString());
    //formData.append('fechaCarga', mascota.fechaCarga.toDateString());
    formData.append('ubicacion', mascota.ubicacion.toString());
    formData.append('descripcion', mascota.descripcion);
    formData.append('usuario', mascota.usuario.toString());
    //formData = { ...formData, ...mascota };

    console.log('Mascota Desactivada', formData);

    // else {
    //   mascota.activo = true;
    //   formData = { ...formData, ...mascota };
    //   console.log('Mascota Activo', formData);
    // }

    this.mascotasService.updateMascota(mascota.idMascota!, mascota).subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.toastrService.info(
            'Hay un error en los parametros de carga.',
            'Verificar datos.',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
        this.toastrService.success(
          data.response,
          'Editaste tu mascota correctamente',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
      error: (err) => {
        this.toastrService.error(
          err.error.message,
          'Ocurrió un error al cargar mascota.',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
    console.log(mascota.idMascota, mascota.activo);
  }
}
//MODIFIQUE BACKENDO BUSCASMASCOTASPORID DE FILTROMASCOTA--Y DTO FILTRO MASCOTA.
