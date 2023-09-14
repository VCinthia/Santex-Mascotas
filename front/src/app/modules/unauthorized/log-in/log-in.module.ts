import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInFormComponent } from './components';
import { LogInRoutingModule } from './log-in-routing.module';
import { CarouselModule } from '../../carousel/carousel.module';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInFormComponent,
    LogInRoutingModule,
    CarouselModule,
  ],
})
export class LogInModule {}
