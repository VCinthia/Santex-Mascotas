import { Component, OnInit } from '@angular/core';
import { DatosformService } from 'src/app/services/datosform.service';

@Component({

  // standalone:true,
  selector: 'app-form-reportar',
  templateUrl: './form-reportar.component.html',
  styleUrls: ['./form-reportar.component.css']
})
export class FormReportarComponent implements OnInit{

  constructor(
    private datosForm : DatosformService
  ) {};

  ngOnInit(): void {
    this.datosForm.cargarEspecies();
    this.datosForm.cargarCiudades();
    if (this.datosForm.ciudadDTO) {
      this.datosForm.cargarBarriosByCiudad(this.datosForm.ciudadDTO.idCiudad);
    }
   }

  onReportar() {}

}
