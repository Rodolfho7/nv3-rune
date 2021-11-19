import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicialComponent } from './inicial/inicial.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { RouterModule } from '@angular/router';
import { MembrosComponent } from './membros/membros.component';
import { MembroComponent } from './membro/membro.component';
import { EditorHabilidadesComponent } from './api/editor-habilidades/editor-habilidades.component';

@NgModule({
  declarations: [
    HabilidadesComponent,
    InicialComponent,
    HabilidadeComponent,
    MembrosComponent,
    MembroComponent,
    EditorHabilidadesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HabilidadesComponent,
    InicialComponent,
    HabilidadeComponent,
    EditorHabilidadesComponent
  ]
})
export class PagesModule { }
