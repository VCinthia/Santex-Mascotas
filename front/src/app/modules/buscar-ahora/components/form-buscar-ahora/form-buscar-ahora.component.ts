import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CiudadDTO } from 'src/app/models/ciudad.dto';
import { EspecieDTO } from 'src/app/models/especie.dto';
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

  //especie: string;
  especieDTO: EspecieDTO | any = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | any = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | any = null;
  barrios: BarrioDTO[] = [];

  constructor(
    private especieService: EspecieService,
    private ciudadService: CiudadService,
    private barrioService: UbicacionService,
    private mascotaService: MascotaService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    //this.especie = '';
  }

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
      // Filtra los barrios basados en la ciudad seleccionada
      this.cargarBarriosByCiudad(selectedCiudadId);
    } catch (error) {
      // Manejar el caso en el que ocurra una excepción
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
          // No se encontraron barrios, muestra un mensaje Toastr
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
  
}
