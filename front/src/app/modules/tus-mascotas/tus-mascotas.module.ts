import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TusMascotasComponent } from './tus-mascotas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CardComponent } from 'src/app/components';
import { CarouselModule } from '../carousel/carousel.module';
import { TusMascotasRoutingModule } from './tus-mascotas-routing.module';

@NgModule({
  declarations: [
    TusMascotasComponent
  ],
  imports: [
    CardComponent,   
    HttpClientModule,
    FormsModule,
    CommonModule,
    CarouselModule,
    TusMascotasRoutingModule,
    ToastrModule.forRoot({
    }),
  ],
  exports : [TusMascotasComponent]
})
export class TusMascotasModule { }
