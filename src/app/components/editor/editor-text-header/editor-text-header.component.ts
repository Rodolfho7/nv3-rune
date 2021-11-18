import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-text-header',
  templateUrl: './editor-text-header.component.html',
  styleUrls: ['./editor-text-header.component.scss']
})
export class EditorTextHeaderComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
