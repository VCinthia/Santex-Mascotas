import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SPortadaComponent } from './components/s-portada/s-portada.component';
import { SPodemosAyudarteComponent } from './components/s-podemos-ayudarte/s-podemos-ayudarte.component';
import { SQueHacemosComponent } from './components/s-que-hacemos/s-que-hacemos.component';
import { SComoLogramosComponent } from './components/s-como-logramos/s-como-logramos.component';
import { SIntegrantesComponent } from './components/s-integrantes/s-integrantes.component';
import { STienesDudasComponent } from './components/s-tienes-dudas/s-tienes-dudas.component';
import { CarouselModule } from '../carousel/carousel.module';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [HomeComponent, ScrollToTopComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SPortadaComponent,
    SPodemosAyudarteComponent,
    SQueHacemosComponent,
    SComoLogramosComponent,
    SIntegrantesComponent,
    STienesDudasComponent,
    CarouselModule,
  ],
})
export class HomeModule {}
