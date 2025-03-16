import { Component } from '@angular/core';
import { CommonModule, NgIf } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ThemeService } from '../../services/theme.service';
import { trigger, transition, style, animate, keyframes, query, stagger, group } from '@angular/animations';
import { ThemeToggleComponent } from '../../services/theme-toggle.component/theme-toggle.component.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showToggle = true;
  isMenuOpen = false;
  isLightMode = true;
  selectedLanguage = 'en';

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isLightMode = !this.isLightMode;
  }
  
  get themeText(): string {
    return this.themeService.isLightMode ? 'Light Mode' : 'Dark Mode';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    console.log('Language set to', lang);
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        this.selectedLanguage = savedLang;
      }
    }
  }
}
