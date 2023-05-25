import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadeComponent } from './pages/habilidade/habilidade.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { MembrosComponent } from './pages/membros/membros.component';
import { MembroComponent } from './pages/membro/membro.component';

// import { EditorHabilidadesComponent } from './pages/api/editor-habilidades/editor-habilidades.component';

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
  },
  {
    path: 'membros',
    component: MembrosComponent
  },
  {
    path: 'membro/:name',
    component: MembroComponent
  },
  // {
  //   path:'api/habilidades',
  //   component: EditorHabilidadesComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
