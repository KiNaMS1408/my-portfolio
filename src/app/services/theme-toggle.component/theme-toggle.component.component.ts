import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { iconSwitchAnimation, sunAnimation, moonAnimation } from '../theme.animations/theme.animations.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  animations: [iconSwitchAnimation, sunAnimation, moonAnimation],
  template: `
    <div (click)="toggleTheme()" class="theme-toggle">
      <ng-container [@iconSwitch]>
        <svg *ngIf="isLightMode" @sunAnimation width="30" height="30">
          <circle cx="15" cy="15" r="6" fill="currentColor" />
          <line id="ray" stroke="currentColor" stroke-width="2" stroke-linecap="round" x1="15" y1="1" x2="15" y2="4"></line>
          <use href="#ray" transform="rotate(45 15 15)" />
          <use href="#ray" transform="rotate(90 15 15)" />
          <use href="#ray" transform="rotate(135 15 15)" />
          <use href="#ray" transform="rotate(180 15 15)" />
          <use href="#ray" transform="rotate(225 15 15)" />
          <use href="#ray" transform="rotate(270 15 15)" />
          <use href="#ray" transform="rotate(315 15 15)" />
        </svg>

        <svg *ngIf="!isLightMode" @moonAnimation width="30" height="30">
          <path fill="currentColor" d="M 23, 5 A 12 12 0 1 0 23, 25 A 12 12 0 0 1 23, 5" />
        </svg>
      </ng-container>
    </div>
  `,
  styleUrls: []
})
export class ThemeToggleComponent {
  @Input() isLightMode = true;
  @Input() toggleTheme!: () => void;
}
