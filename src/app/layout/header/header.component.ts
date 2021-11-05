import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  darkChecked = false;
  menuOpen = false;

  constructor(private readonly themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.darkChecked = !this.darkChecked;
  }
}
