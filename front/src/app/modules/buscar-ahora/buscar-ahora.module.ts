import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuscarAhoraComponent } from './components/form-buscar-ahora/form-buscar-ahora.component';
import { BuscarAhoraComponent } from './buscar-ahora.component';
import { BuscarAhoraRoutingModule } from './buscar-ahora-routing.module';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  declarations: [BuscarAhoraComponent],
  imports: [
    CommonModule,
    BuscarAhoraRoutingModule,
    FormBuscarAhoraComponent,
    CarouselModule,
  ],
})
export class BuscarAhoraModule {}
