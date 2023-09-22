import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecieDTO } from 'src/app/models/especie.dto';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { EspecieService } from 'src/app/services/especie.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  // standalone: true,

  selector: 'app-form-buscar-ahora',
  templateUrl: './form-buscar-ahora.component.html',
  styleUrls: ['./form-buscar-ahora.component.css'],
})
export class FormBuscarAhoraComponent implements OnInit{
  
  //especie: string;
  especieDTO: EspecieDTO | any = null;
  especies:EspecieDTO[] = [];

  constructor (
    private especieService : EspecieService,
    private mascotaService : MascotaService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ){
    //this.especie = '';
  }

  ngOnInit(): void { 
    this.cargarEspecies();
   }

  cargarEspecies(): void {
    this.especieService.getListaEspecies().subscribe(
      data => {
        this.especies = data;
      },
      err => {
        this.toastrService.error(err.error.message, 'Desconexión: Error en carga de especies',{
          timeOut: 3000, positionClass:'toast-top-right'
        });
      }
    );
  }
}
