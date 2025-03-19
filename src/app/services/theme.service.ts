import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isLightModeSubject = new BehaviorSubject<boolean>(this.getStoredTheme());
  isLightMode$ = this.isLightModeSubject.asObservable();

  toggleTheme() {
    const newMode = !this.isLightModeSubject.value;
    this.isLightModeSubject.next(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLightMode', JSON.stringify(newMode));
    }
    document.body.classList.toggle('dark-theme', !newMode);
  }

  private getStoredTheme(): boolean {
    if (typeof window === 'undefined') {
      return true;
    }
    const storedTheme = localStorage.getItem('isLightMode');
    return storedTheme ? JSON.parse(storedTheme) : true;
  }
}