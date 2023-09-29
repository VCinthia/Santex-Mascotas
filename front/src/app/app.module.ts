import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [
    CardComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule, // lo cambie de declarations a imports,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Duración predeterminada de las notificaciones en milisegundos
      positionClass: 'toast-top-right', // Posición predeterminada de las notificaciones
      // preventDuplicates: true, // Evitar que se muestren notificaciones duplicadas
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
