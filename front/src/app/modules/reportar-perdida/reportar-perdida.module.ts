import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReportarComponent } from './components/form-reportar/form-reportar.component';
import { ReportarPerdidaRoutingModule } from './reportar-perdida-routing.module';
import { ReportarPerdidaComponent } from './reportar-perdida.component';
import { CardComponent } from 'src/app/components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from '../carousel/carousel.module';
@NgModule({
  declarations: [
    ReportarPerdidaComponent,
    FormReportarComponent
  ],
  imports: [
    CardComponent,   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    ReportarPerdidaRoutingModule,
    CarouselModule,
    ToastrModule.forRoot({}),    
  ],
  exports : [FormReportarComponent]
})
export class ReportarPerdidaModule { }
