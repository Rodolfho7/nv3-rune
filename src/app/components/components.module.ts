import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { EditorTextHeaderComponent } from './editor/editor-text-header/editor-text-header.component';
import { EditorTextParagraphComponent } from './editor/editor-text-paragraph/editor-text-paragraph.component';
import { EditorImageComponent } from './editor/editor-image/editor-image.component';
import { EditorListComponent } from './editor/editor-list/editor-list.component';

@NgModule({
  declarations: [
    CardComponent,
    EditorTextHeaderComponent,
    EditorTextParagraphComponent,
    EditorImageComponent,
    EditorListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
