import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';
import { RegisterRoutingModule } from './register-routing.module';
import { CarouselModule } from '../../carousel/carousel.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterFormComponent,
    RegisterRoutingModule,
    CarouselModule,
  ],
})
export class RegisterModule {}
