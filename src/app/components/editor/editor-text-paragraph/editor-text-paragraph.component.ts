import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-text-paragraph',
  templateUrl: './editor-text-paragraph.component.html',
  styleUrls: ['./editor-text-paragraph.component.scss']
})
export class EditorTextParagraphComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
