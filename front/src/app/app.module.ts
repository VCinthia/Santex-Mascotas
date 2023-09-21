import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // lo cambie de declarations a imports,
    RouterModule,
    FooterComponent, // lo cambie de declarations a imports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
