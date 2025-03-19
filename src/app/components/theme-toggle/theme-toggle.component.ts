import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (click)="toggleTheme()" class="theme-toggle">
      <svg *ngIf="isLightMode" @fadeAnimation width="30" height="30">
        <circle cx="15" cy="15" r="6" fill="currentColor" />
        <line *ngFor="let i of rays" [attr.transform]="'rotate(' + i + ' 15 15)'" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" x1="15" y1="1" x2="15" y2="4"></line>
      </svg>
      <svg *ngIf="!isLightMode" @fadeAnimation width="30" height="30">
        <path fill="currentColor" d="M 23, 5 A 12 12 0 1 0 23, 25 A 12 12 0 0 1 23, 5" />
      </svg>
    </div>
  `,
  styles: [`.theme-toggle { cursor: pointer; }`],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ])
  ]
})
export class ThemeToggleComponent {
  isLightMode = true;
  rays = [0, 45, 90, 135, 180, 225, 270, 315];

  constructor(private themeService: ThemeService) {
    this.themeService.isLightMode$.subscribe(mode => this.isLightMode = mode);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}