import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicialComponent } from './inicial/inicial.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HabilidadesComponent,
    InicialComponent,
    HabilidadeComponent
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
