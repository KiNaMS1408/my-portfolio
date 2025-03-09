import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showToggle = true;
  isMenuOpen = false;
  selectedLanguage = 'en';

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get themeText(): string {
    return this.themeService.isLightMode ? 'Light Mode' : 'Dark Mode';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
    console.log('Language set to', lang);
    
  }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
  }
}

