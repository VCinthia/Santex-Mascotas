import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TusMascotasComponent } from './tus-mascotas.component';


const routes: Routes = [
  { path: '', component: TusMascotasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TusMascotasRoutingModule { }
