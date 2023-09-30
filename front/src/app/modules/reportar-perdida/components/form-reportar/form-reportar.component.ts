import { Component, OnInit } from '@angular/core';
import { CiudadDTO } from 'src/app/models/ciudad.dto';
import { EspecieDTO } from 'src/app/models/especie.dto';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { BarrioDTO } from 'src/app/models/ubicacion.dto';
import { UserDTO } from 'src/app/models/user.dto';
import { DatosformService } from 'src/app/services/datosform.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-reportar',
  templateUrl: './form-reportar.component.html',
  styleUrls: ['./form-reportar.component.css']
})
export class FormReportarComponent implements OnInit {

  foto: File | any = null;

  especieDTO: EspecieDTO | any = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | any = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | any = null;
  barrios: BarrioDTO[] = [];

  mascotaDTO: MascotasDTO | any = null;

  mascota: MascotasDTO = new MascotasDTO();

  constructor(
    public datosForm: DatosformService,

  ) {

  };

  ngOnInit(): void {
    this.datosForm.cargarEspecies();
    this.datosForm.cargarCiudades();
    if (this.datosForm.ciudadDTO) {
      this.datosForm.cargarBarriosByCiudad(this.datosForm.ciudadDTO.idCiudad);
    }

    this.mascota.usuario = this.datosForm.tokenService.getIdUsuario()!;
    this.mascota.activo = true;
  }


  onFileSelected(event: any) {
    this.foto = event.target.files[0];
  }


  onReportar(): void {

    // Crear un FormData y agregar la imagen
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

    console.log('Foto:', this.foto);
    console.log('mascota inicio funcion', this.mascota);

    
    this.datosForm.mascotaService.createMascota(this.foto, formData).subscribe(
      (data) => {
        if (data.length === 0) {
          //console.log('mascota compara data.length es === 0', this.mascota);
          this.datosForm.toastrService.info(
            'Hay un error en los parametros de carga.',
            'Verificar datos.',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
        this.datosForm.toastrService.success(data.response, 'Registraste tu mascota correctamente', {
        timeOut: 3000, positionClass: 'toast-top-right'
      });
      },
      err => {
        this.datosForm.toastrService.error(
          err.error.message,
          'Ocurrió un error al cargar mascota.',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      }
    );
  }

}
