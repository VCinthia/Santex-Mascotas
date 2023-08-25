import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBusquedaComponent } from './components/form-busqueda/form-busqueda.component';
import { ReportarPerdidaRoutingModule } from './reportar-perdida-routing.module';
import { ReportarPerdidaComponent } from './reportar-perdida.component';



@NgModule({
  declarations: [
    ReportarPerdidaComponent,
  ],
  imports: [
    CommonModule,    
    ReportarPerdidaRoutingModule,
    FormBusquedaComponent
  ]
})
export class ReportarPerdidaModule { }
