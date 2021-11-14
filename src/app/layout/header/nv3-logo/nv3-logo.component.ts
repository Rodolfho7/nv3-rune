import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nv3-logo',
  templateUrl: './nv3-logo.component.html',
  styleUrls: ['./nv3-logo.component.scss']
})
export class Nv3LogoComponent {

  @Input() darkChecked = false;

  constructor() { }
}
