import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';
import { RegisterRoutingModule } from './register-routing.module';
import { CarouselModule } from '../../carousel/carousel.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RegisterComponent,  
    RegisterFormComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RegisterRoutingModule,
    CarouselModule,
    ToastrModule.forRoot({
    }),
  ],
  exports: [RegisterFormComponent],
})
export class RegisterModule {}
