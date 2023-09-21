import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: 'buscar-ahora',
    loadChildren: () => import('./modules').then((m) => m.BuscarAhoraModule),
  },
  {
    path: 'reportar-perdida',
    loadChildren: () =>
      import('./modules').then((m) => m.ReportarPerdidaModule),
  },
  // {
  //   path: 'tus-mascotas',
  //   loadChildren: () =>
  //     import('./modules').then((m) => m.MascotasUser),
  // },
  {
    path: 'log-in',
    loadChildren: () => import('./modules').then((m) => m.LogInModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./modules').then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
