import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CiudadDTO } from 'src/app/models/ciudad.dto';
import { EspecieDTO } from 'src/app/models/especie.dto';
import { FilterMascotaDto } from 'src/app/models/filtermascota.dto';
import { FiltroMascotaDto } from 'src/app/models/filtromascotas.dto';
import { BarrioDTO } from 'src/app/models/ubicacion.dto';
import { CiudadService } from 'src/app/services/ciudad.service';
import { EspecieService } from 'src/app/services/especie.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DatosformService } from 'src/app/services/datosform.service';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-buscar-ahora',
  templateUrl: './form-buscar-ahora.component.html',
  styleUrls: ['./form-buscar-ahora.component.css'],
})
export class FormBuscarAhoraComponent implements OnInit {
  @ViewChild('formularioBusquedaMascota') formularioBusquedaMascota?: NgForm;
  
  especieDTO: EspecieDTO | null = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | null = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | null = null;
  barrios: BarrioDTO[] = [];

  
  mascotaFiltroDTO: FiltroMascotaDto | null = null;
  mascotasFiltroDTO: FiltroMascotaDto[] = [];

  filtro: FilterMascotaDto = new FilterMascotaDto();

  // constructor(
  //   public sanitizer: DomSanitizer,
  //   private especieService: EspecieService,
  //   private ciudadService: CiudadService,
  //   private barrioService: UbicacionService,
  //   private mascotaService: MascotaService,
  //   private tokenService: TokenService,
  //   private toastrService: ToastrService,
  //   private router: Router
  // ) {}

  constructor(
    public datosForm: DatosformService,
    private mascotaService: MascotaService,
    private router: Router
  ) {
    //this.mascotaFiltroDTO = new FiltroMascotaDto();
  };

  ngOnInit(): void {
    // this.cargarEspecies();
    // this.cargarCiudades();
    // if (this.ciudadDTO) {
    //   this.cargarBarriosByCiudad(Number(this.ciudadDTO.idCiudad));
    // }

    this.datosForm.resetEspeciesYCiudades();

    this.datosForm.cargarEspecies();
    this.datosForm.cargarCiudades();
    if (this.datosForm.ciudadDTO) {
      this.datosForm.cargarBarriosByCiudad(Number(this.datosForm.ciudadDTO.idCiudad));
    }
  }

  // cargarEspecies(): void {
  //   this.especieService.getListaEspecies().subscribe({
  //     next: (data: EspecieDTO[]) => {
  //       this.especies = data;
  //     },
  //     error: (err) => {
  //       this.toastrService.error(
  //         err.error.message,
  //         'Desconexión: Error en carga de especies',
  //         {
  //           timeOut: 3000,
  //           positionClass: 'toast-top-right',
  //         }
  //       );
  //     },
  //   });
  // }

  // cargarCiudades(): void {
  //   this.ciudadService.getListaCiudad().subscribe({
  //     next: (data: CiudadDTO[]) => {
  //       this.ciudades = data;
  //     },
  //     error: (err) => {
  //       this.toastrService.error(
  //         err.error.message,
  //         'Desconexión: Error en carga de ciudades',
  //         {
  //           timeOut: 3000,
  //           positionClass: 'toast-top-right',
  //         }
  //       );
  //     },
  //   });
  // }

  // onCiudadChange(event: Event): void {
  //   const target = event.target as HTMLSelectElement;
  //   const selectedCiudadId = parseInt(target.value, 10);
  //   try {
  //     this.cargarBarriosByCiudad(selectedCiudadId);
  //   } catch (error) {
  //     console.error('Error al cargar los barrios:', error);
  //     this.toastrService.error(
  //       'Ocurrió un error al cargar los barrios.',
  //       'Error',
  //       {
  //         timeOut: 3000,
  //         positionClass: 'toast-top-right',
  //       }
  //     );
  //   }
  // }

  // cargarBarriosByCiudad(ciudadId: number): void {
  //   this.barrioService.getListaUbicacionByCiudad(ciudadId).subscribe({
  //     next: (data: BarrioDTO[]) => {
  //       this.barrios = data;
  //       if (this.barrios.length === 0) {
  //         this.toastrService.warning(
  //           'No hay barrios para esa ciudad.',
  //           'Advertencia',
  //           {
  //             timeOut: 3000,
  //             positionClass: 'toast-top-right',
  //           }
  //         );
  //       }
  //     },
  //     error: (err) => {
  //       this.toastrService.error(
  //         err.error.message,
  //         'Desconexión: Error en carga de barrios',
  //         {
  //           timeOut: 3000,
  //           positionClass: 'toast-top-right',
  //         }
  //       );
  //     },
  //   });
  // }

  onBuscar(): void {
    // if (this.formularioBusquedaMascota) {
    //   const form = this.formularioBusquedaMascota;
      
    //   if (form.invalid) {
    //     const missingFields: string[] = [];
  
    //     Object.keys(form.controls).forEach((controlName) => {
    //       const controlElement = form.form.get(controlName);
          
    //       if (controlElement && controlElement.invalid){
    //         missingFields.push(controlName);
    //       }
    //     });
        
    //     if (missingFields.length > 0) {
    //       const missingFieldsMessage = `Por favor, seleccione los siguientes campos obligatorios: ${missingFields.join(', ')}`;
    //       this.datosForm.toastrService.warning(missingFieldsMessage, 'Campos requeridos', {
    //         timeOut: 3000,
    //         positionClass: 'toast-top-right',
    //       });
    //       return;
    //     }
    //   }
    // }
    
    // if (this.formularioBusquedaMascota && this.formularioBusquedaMascota.invalid) {
    //   this.datosForm.toastrService.warning('Por favor, complete los campos obligatorios.', 'Campos requeridos', {
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //   });
    //   return;
    // }

    this.mascotaService.getListaFiltroMascotas(this.filtro).subscribe({
      
      
      next: (data: FiltroMascotaDto[]) => {
        if (data.length === 0) {
          this.datosForm.toastrService.info(
            'No se encontraron mascotas que coincidan con los parámetros de búsqueda.',
            'Sin coincidencias',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
        this.mascotasFiltroDTO = data;
      },
      error: (err) => {
        this.datosForm.toastrService.error(
          err.error.message,
          'Ocurrió un error al buscar mascotas.',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
  }
}
