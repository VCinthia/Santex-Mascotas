import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SPortadaComponent } from './components/s-portada/s-portada.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SPortadaComponent//lo saque de declarations y lo importe
  ]
})
export class HomeModule { }
