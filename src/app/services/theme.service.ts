import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private htmlReference: HTMLHtmlElement | null;

  constructor(private storageService: StorageService) {
    this.htmlReference = document.querySelector('html');
  }

  toggleTheme(themeDarkChecked: boolean): void {
    this.storageService.setItem('nv3-theme', themeDarkChecked ? 'dark' : 'light');
    this.htmlReference?.classList.add('color-theme-in-transition');
    this.htmlReference?.classList.toggle('dark');
    setTimeout(() => {
      this.htmlReference?.classList.remove('color-theme-in-transition');
    }, 750);
  }
}
