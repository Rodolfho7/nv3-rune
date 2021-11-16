import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicialComponent } from './inicial/inicial.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { RouterModule } from '@angular/router';
import { MembrosComponent } from './membros/membros.component';
import { MembroComponent } from './membro/membro.component';

@NgModule({
  declarations: [
    HabilidadesComponent,
    InicialComponent,
    HabilidadeComponent,
    MembrosComponent,
    MembroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    HabilidadesComponent,
    InicialComponent,
    HabilidadeComponent
  ]
})
export class PagesModule { }
