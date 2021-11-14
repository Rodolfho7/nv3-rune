import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkChecked = false;
  menuOpen = false;

  constructor(
    private readonly themeService: ThemeService,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.storageService.getItem('nv3-theme') === 'dark') {
      this.darkChecked = true;
      this.themeService.toggleTheme(this.darkChecked);
    }
  }

  toggleTheme(): void {
    this.darkChecked = !this.darkChecked;
    this.themeService.toggleTheme(this.darkChecked);
  }
}
