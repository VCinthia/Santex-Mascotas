import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportarPerdidaComponent } from './reportar-perdida.component';


const routes: Routes = [
  { path: '', component: ReportarPerdidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportarPerdidaRoutingModule { }
