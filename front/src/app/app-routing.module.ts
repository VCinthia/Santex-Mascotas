import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
