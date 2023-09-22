import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuscarAhoraComponent } from './components/form-buscar-ahora/form-buscar-ahora.component';
import { BuscarAhoraComponent } from './buscar-ahora.component';
import { BuscarAhoraRoutingModule } from './buscar-ahora-routing.module';
import { CarouselModule } from '../carousel/carousel.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    FormBuscarAhoraComponent,
    BuscarAhoraComponent],
  imports: [
    FormsModule,
    CommonModule,
    BuscarAhoraRoutingModule,
    
    CarouselModule,
    ToastrModule.forRoot({
      // timeOut: 3000, // Duración predeterminada de las notificaciones en milisegundos
      // positionClass: 'toast-top-right', // Posición predeterminada de las notificaciones
      // preventDuplicates: true, // Evitar que se muestren notificaciones duplicadas
    }),
  ],
  exports : [FormBuscarAhoraComponent]
})
export class BuscarAhoraModule {}
