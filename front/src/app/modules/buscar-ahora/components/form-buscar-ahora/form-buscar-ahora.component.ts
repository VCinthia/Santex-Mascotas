import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CiudadDTO } from 'src/app/models/ciudad.dto';
import { EspecieDTO } from 'src/app/models/especie.dto';
import { FilterMascotaDto } from 'src/app/models/filtermascota.dto';
import { FiltroMascotaDto } from 'src/app/models/filtromascotas.dto';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { BarrioDTO } from 'src/app/models/ubicacion.dto';
import { CiudadService } from 'src/app/services/ciudad.service';
import { EspecieService } from 'src/app/services/especie.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  // standalone: true,

  selector: 'app-form-buscar-ahora',
  templateUrl: './form-buscar-ahora.component.html',
  styleUrls: ['./form-buscar-ahora.component.css'],
})
export class FormBuscarAhoraComponent implements OnInit {
  
  especieDTO: EspecieDTO | any = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | any = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | any = null;
  barrios: BarrioDTO[] = [];

  mascotaDTO : MascotasDTO | any = null;
  mascotas : MascotasDTO[] = [];

  mascotaFiltroDTO : FiltroMascotaDto | any = null;
  mascotasFiltroDTO : FiltroMascotaDto[] = []
  
  filtro: FilterMascotaDto = new FilterMascotaDto();
  
  constructor(
    private especieService: EspecieService,
    private ciudadService: CiudadService,
    private barrioService: UbicacionService,
    private mascotaService: MascotaService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {  };

  ngOnInit(): void {
    this.cargarEspecies();
    this.cargarCiudades();
    if (this.ciudadDTO) {
      this.cargarBarriosByCiudad(this.ciudadDTO.idCiudad);
    }
  }

  cargarEspecies(): void {
    this.especieService.getListaEspecies().subscribe(
      data => {
        this.especies = data;
      },
      err => {
        this.toastrService.error(err.error.message, 'Desconexión: Error en carga de especies', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }
    );
  }

  cargarCiudades(): void {
    this.ciudadService.getListaCiudad().subscribe(
      data => {
        this.ciudades = data;
      },
      err => {
        this.toastrService.error(err.error.message, 'Desconexión: Error en carga de ciudades', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }
    );
  }

  onCiudadChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedCiudadId = parseInt(target.value, 10); // Convierte el valor a número  
    try {
      this.cargarBarriosByCiudad(selectedCiudadId);
    } catch (error) {
      console.error('Error al cargar los barrios:', error);
      this.toastrService.error('Ocurrió un error al cargar los barrios.', 'Error', {
        timeOut: 3000, positionClass: 'toast-top-right'
      });
    }
  }
  
  cargarBarriosByCiudad(ciudadId: number): void {
    this.barrioService.getListaUbicacionByCiudad(ciudadId).subscribe(
      data => {
        this.barrios = data;        
        if (this.barrios.length === 0) {
          this.toastrService.warning('No hay barrios para esa ciudad.', 'Advertencia', {
            timeOut: 3000, positionClass: 'toast-top-right'
          });
        }
      },
      err => {
        this.toastrService.error(err.error.message, 'Desconexión: Error en carga de barrios', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }
    );
  }

  onBuscar(): void {
    
      this.mascotaService.getListaFiltroMascotas(this.filtro).subscribe(
        (data) => {
          if (data.length === 0) {
            this.toastrService.info(
            'No se encontraron mascotas que coincidan con los parámetros de búsqueda.',
            'Sin coincidencias',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
        // console.log('foto', this.mascotaFiltroDTO.foto);
        // console.log('data', this.mascotaFiltroDTO);
        this.mascotasFiltroDTO = data;
          //console.log('foto', this.mascotaFiltroDTO.foto);
          //console.log('data', data);
          //console.log('filtro despues de igualar a data',this.filtro);
          //console.log('mascotasFiltroDTO despues de igualar a data',this.mascotasFiltroDTO);
        },
        err => {
          this.toastrService.error(
            err.error.message,
            'Ocurrió un error al buscar mascotas.',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
      );
  }  
  
}
