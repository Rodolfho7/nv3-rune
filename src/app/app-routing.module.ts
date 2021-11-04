import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadeComponent } from './pages/habilidade/habilidade.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { InicialComponent } from './pages/inicial/inicial.component';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent,
  },
  {
    path: 'habilidades/:skill',
    component: HabilidadeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
