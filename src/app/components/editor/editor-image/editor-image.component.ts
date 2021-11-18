import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-image',
  templateUrl: './editor-image.component.html',
  styleUrls: ['./editor-image.component.scss']
})
export class EditorImageComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
