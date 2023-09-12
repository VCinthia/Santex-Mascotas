import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAhoraComponent } from './buscar-ahora.component';

const routes: Routes = [{ path: '', component: BuscarAhoraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarAhoraRoutingModule {}
