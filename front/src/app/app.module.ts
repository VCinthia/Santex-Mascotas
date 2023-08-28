import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [AppComponent, NavComponent, CarrouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // lo cambie de declarations a imports,
    FooterComponent, // lo cambie de declarations a imports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
