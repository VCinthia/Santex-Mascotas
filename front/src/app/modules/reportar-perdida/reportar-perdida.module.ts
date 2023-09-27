import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReportarComponent } from './components/form-reportar/form-reportar.component';
import { ReportarPerdidaRoutingModule } from './reportar-perdida-routing.module';
import { ReportarPerdidaComponent } from './reportar-perdida.component';
import { CardComponent } from 'src/app/components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from '../carousel/carousel.module';



@NgModule({
  declarations: [
    ReportarPerdidaComponent,
    FormReportarComponent
  ],
  imports: [
    CardComponent,   
    HttpClientModule,
    FormsModule,
    CommonModule,    
    ReportarPerdidaRoutingModule,

    CarouselModule,
    ToastrModule.forRoot({
      // timeOut: 3000, // Duración predeterminada de las notificaciones en milisegundos
      // positionClass: 'toast-top-right', // Posición predeterminada de las notificaciones
      // preventDuplicates: true, // Evitar que se muestren notificaciones duplicadas
    }),
    
  ],
  exports : [FormReportarComponent]
})
export class ReportarPerdidaModule { }
