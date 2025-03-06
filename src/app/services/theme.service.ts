import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightModeClass = 'light-mode';
  private darkModeClass = 'dark-mode';

  public isLightMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.isLightMode) {
      this.document.body.classList.add(this.lightModeClass);
      this.document.body.classList.remove(this.darkModeClass);
      if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', 'light');
      }
    } else {
      this.document.body.classList.add(this.darkModeClass);
      this.document.body.classList.remove(this.lightModeClass);
      if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', 'dark');
      }
    }
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
    const savedTheme = localStorage.getItem('theme');
    this.isLightMode = savedTheme === 'light';
    this.updateTheme();
    }
  }
}
