import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightMode = 'light-mode';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle(this.lightMode);
      localStorage.setItem('theme', document.body.classList.contains(this.lightMode) ? 'light' : 'dark');
    }
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.body.classList.add(this.lightMode);
      }
    }
  }
}
