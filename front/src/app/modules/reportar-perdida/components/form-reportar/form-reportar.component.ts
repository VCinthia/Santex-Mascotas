import { Component, OnInit } from '@angular/core';
import { CiudadDTO } from 'src/app/models/ciudad.dto';
import { EspecieDTO } from 'src/app/models/especie.dto';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { BarrioDTO } from 'src/app/models/ubicacion.dto';
import { DatosformService } from 'src/app/services/datosform.service';

@Component({
  selector: 'app-form-reportar',
  templateUrl: './form-reportar.component.html',
  styleUrls: ['./form-reportar.component.css'],
})
export class FormReportarComponent implements OnInit {
  foto: File | any = null;

  especieDTO: EspecieDTO | null = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | null = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | null = null;
  barrios: BarrioDTO[] = [];

  mascotaDTO: MascotasDTO | null = null;

  mascota: MascotasDTO = new MascotasDTO();

  constructor(public datosForm: DatosformService) {}

  ngOnInit(): void {
    this.datosForm.cargarEspecies();
    this.datosForm.cargarCiudades();
    if (this.datosForm.ciudadDTO) {
      this.datosForm.cargarBarriosByCiudad(
        Number(this.datosForm.ciudadDTO.idCiudad)
      );
    }

    this.mascota.usuario = this.datosForm.tokenService.getIdUsuario()!;
    this.mascota.activo = true;
  }

  onFileSelected(event: any) {
    this.foto = event.target.files[0];
  }

  onReportar(): void {
    const formData = new FormData();
    formData.append('file', this.foto);

    formData.append('idEspecie', this.mascota.especie.toString());
    formData.append('color', this.mascota.color);
    formData.append('tamanio', this.mascota.tamanio);
    formData.append('estado', this.mascota.estado);
    formData.append('activo', this.mascota.activo.toString());
    formData.append('fechaCarga', this.mascota.fechaCarga.toDateString());
    formData.append('idUbicacion', this.mascota.ubicacion.toString());
    formData.append('descripcion', this.mascota.descripcion);
    formData.append('idUsuario', this.mascota.usuario.toString());

    this.datosForm.mascotaService.createMascota(this.foto, formData).subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.datosForm.toastrService.info(
            'Hay un error en los parametros de carga.',
            'Verificar datos.',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
        this.datosForm.toastrService.success(
          data.response,
          'Registraste tu mascota correctamente',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
      error: (err) => {
        this.datosForm.toastrService.error(
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
