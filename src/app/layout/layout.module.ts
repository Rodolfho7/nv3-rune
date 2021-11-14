import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Nv3LogoComponent } from './header/nv3-logo/nv3-logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Nv3LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
