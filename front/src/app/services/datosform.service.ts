import { Injectable } from '@angular/core';
import { CiudadDTO } from '../models/ciudad.dto';
import { EspecieDTO } from '../models/especie.dto';
import { MascotasDTO } from '../models/mascotas.dto';
import { BarrioDTO } from '../models/ubicacion.dto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CiudadService } from './ciudad.service';
import { EspecieService } from './especie.service';
import { MascotaService } from './mascota.service';
import { TokenService } from './token.service';
import { UbicacionService } from './ubicacion.service';
import { LoginService } from './login.service';
import { UserDTO } from '../models/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosformService {
  especieDTO: EspecieDTO | null = null;
  especies: EspecieDTO[] = [];

  ciudadDTO: CiudadDTO | null = null;
  ciudades: CiudadDTO[] = [];

  selectedCiudadId: number | null = null;

  barrioDTO: BarrioDTO | null = null;
  barrios: BarrioDTO[] = [];

  mascotaDTO: MascotasDTO | null = null;
  mascotas: MascotasDTO[] = [];

  usuarioDTO: UserDTO | null = null;

  dniPersona: number | null = null;

  constructor(
    private especieService: EspecieService,
    private ciudadService: CiudadService,
    private barrioService: UbicacionService,
    public mascotaService: MascotaService,
    public tokenService: TokenService,
    public toastrService: ToastrService,
    public loginService: LoginService,
    private router: Router
  ) {
    this.dniPersona = this.tokenService.getIdUsuario();
  }

  public resetEspeciesYCiudades() {
    this.especies = [];
    this.ciudades = [];
  }

  public getUsuario(): Observable<UserDTO> {
    return this.loginService.usuarioById(Number(this.dniPersona));
  }

  public cargarEspecies(): void {
    this.especieService.getListaEspecies().subscribe({
      next: (data) => {
        this.especies = data;
      },
      error: (err) => {
        this.toastrService.error(
          err.error.message,
          'Desconexión: Error en carga de especies',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
  }

  public cargarCiudades(): void {
    this.ciudadService.getListaCiudad().subscribe({
      next: (data) => {
        this.ciudades = data;
      },
      error: (err) => {
        this.toastrService.error(
          err.error.message,
          'Desconexión: Error en carga de ciudades',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
  }

  public onCiudadChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedCiudadId = parseInt(target.value, 10);
    try {
      this.cargarBarriosByCiudad(selectedCiudadId);
    } catch (error) {
      console.error('Error al cargar los barrios:', error);
      this.toastrService.error(
        'Ocurrió un error al cargar los barrios.',
        'Error',
        {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        }
      );
    }
  }

  public cargarBarriosByCiudad(ciudadId: number): void {
    this.barrioService.getListaUbicacionByCiudad(ciudadId).subscribe({
      next: (data) => {
        this.barrios = data;
        if (this.barrios.length === 0) {
          this.toastrService.warning(
            'No hay barrios para esa ciudad.',
            'Advertencia',
            {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            }
          );
        }
      },
      error: (err) => {
        this.toastrService.error(
          err.error.message,
          'Desconexión: Error en carga de barrios',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
  }
}
