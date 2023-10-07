import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInFormComponent } from './components';
import { LogInRoutingModule } from './log-in-routing.module';
import { CarouselModule } from '../../carousel/carousel.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LogInComponent,
    LogInFormComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    LogInRoutingModule,
    CarouselModule,
    ToastrModule.forRoot({
    }),
  ],
  exports: [LogInFormComponent],
})
export class LogInModule {}
