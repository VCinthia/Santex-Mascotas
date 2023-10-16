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
    mascota.activo = mascota.activo.toString() == 'true' ? true : false;
    this.mascotasService
      .updateVisibilidadMascota(mascota.idMascota!, mascota.activo)
      .subscribe({
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
  }
}
//MODIFIQUE BACKENDO BUSCASMASCOTASPORID DE FILTROMASCOTA--Y DTO FILTRO MASCOTA.
