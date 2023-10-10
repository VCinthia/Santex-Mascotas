import { Component, OnInit } from '@angular/core';

import { MascotaService } from 'src/app/services/mascota.service';
import { TokenService } from 'src/app/services/token.service';
import { MascotasDTO } from 'src/app/models/mascotas.dto';

@Component({
  selector: 'app-tus-mascotas',
  templateUrl: './tus-mascotas.component.html',
  styleUrls: ['./tus-mascotas.component.css'],
})
export class TusMascotasComponent implements OnInit {
  dniPersona: string | null = null;

  constructor(
    public mascotasService: MascotaService,
    public tokenService: TokenService
  ) {}

  mascotasDTO: MascotasDTO | null = null;
  mascotas: MascotasDTO[] = [];

  ngOnInit(): void {
    this.dniPersona = this.tokenService.getDniUsuario();
    this.mascotasService.getMascotaByDni(Number(this.dniPersona)).subscribe({
      next: (data) => {
        this.mascotas = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  onEditar() {}
}
