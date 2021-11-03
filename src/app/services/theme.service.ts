import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private htmlReference: HTMLHtmlElement | null;

  constructor() {
    this.htmlReference = document.querySelector('html');
  }

  toggleTheme(): void {
    this.htmlReference?.classList.add('color-theme-in-transition');
    this.htmlReference?.classList.toggle('dark');
    setTimeout(() => {
      this.htmlReference?.classList.remove('color-theme-in-transition');
    }, 750);
  }
}
