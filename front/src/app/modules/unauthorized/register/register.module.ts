import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';
import { RegisterRoutingModule } from './register-routing.module';
import { CarouselModule } from '../../carousel/carousel.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RegisterComponent,  
    RegisterFormComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RegisterRoutingModule,
    CarouselModule,
    ToastrModule.forRoot({
      // timeOut: 3000, // Duración predeterminada de las notificaciones en milisegundos
      // positionClass: 'toast-top-right', // Posición predeterminada de las notificaciones
      // preventDuplicates: true, // Evitar que se muestren notificaciones duplicadas
    }),
  ],
  exports: [RegisterFormComponent],
})
export class RegisterModule {}
