import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReportarComponent } from './components/form-reportar/form-reportar.component';
import { ReportarPerdidaRoutingModule } from './reportar-perdida-routing.module';
import { ReportarPerdidaComponent } from './reportar-perdida.component';



@NgModule({
  declarations: [
    ReportarPerdidaComponent,
  ],
  imports: [
    CommonModule,    
    ReportarPerdidaRoutingModule,
    FormReportarComponent
  ]
})
export class ReportarPerdidaModule { }
