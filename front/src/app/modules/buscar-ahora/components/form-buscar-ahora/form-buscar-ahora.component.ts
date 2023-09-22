import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MascotasDTO } from 'src/app/models/mascotas.dto';
import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  // standalone: true,

  selector: 'app-form-buscar-ahora',
  templateUrl: './form-buscar-ahora.component.html',
  styleUrls: ['./form-buscar-ahora.component.css'],
})
export class FormBuscarAhoraComponent implements OnInit{
  
  especieMascota: string;

  constructor (
    private mascotaService : MascotaService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ){

    this.especieMascota = '';
  }

  ngOnInit(): void {  }

  
}
