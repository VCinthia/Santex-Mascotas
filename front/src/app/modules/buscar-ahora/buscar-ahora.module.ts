import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuscarAhoraComponent } from './components/form-buscar-ahora/form-buscar-ahora.component';
import { BuscarAhoraComponent } from './buscar-ahora.component';
import { BuscarAhoraRoutingModule } from './buscar-ahora-routing.module';
import { CarouselModule } from '../carousel/carousel.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components';

@NgModule({
  declarations: [
    FormBuscarAhoraComponent,
    BuscarAhoraComponent],
  imports: [ 
    CardComponent,   
    HttpClientModule,
    FormsModule,
    CommonModule,
    BuscarAhoraRoutingModule,    
    CarouselModule,
    ToastrModule.forRoot({
    }),
  ],
  exports : [FormBuscarAhoraComponent]
})
export class BuscarAhoraModule {}
