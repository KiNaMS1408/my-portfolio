import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <div class="typewriter-container">
      <div class="icon-container" *ngIf="showIcon">
        <img [src]="icons[currentIcon]" alt="Icon" class="icon" />
      </div>
      <div class="text-container">
        <span>{{ displayedText }}</span>
      </div>
    </div> -->
  `,
  styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent {
  // icons: string[] = [
  //   '../../../src/assets/svg/location.svg',
  //   'assets/icons/icon2.svg',
  //   'assets/icons/icon3.svg'
  // ];
  // texts: string[] = [
  //   'Passionate Developer',
  //   'Creative Thinker',
  //   'Problem Solver'
  // ];
  // currentIcon = 0;
  // currentText = 0;
  // displayedText = '';
  // showIcon = true;
  // typingSpeed = 100;
  // deletingSpeed = 50;
  // pauseBetweenIcons = 1000;

  // constructor() {
  //   this.startTypewriterEffect();
  // }

  // startTypewriterEffect() {
  //   this.typeText(0);
  // }

  // typeText(charIndex: number) {
  //   if (charIndex < this.texts[this.currentText].length) {
  //     this.displayedText += this.texts[this.currentText][charIndex];
  //     setTimeout(() => this.typeText(charIndex + 1), this.typingSpeed);
  //   } else {
  //     setTimeout(() => this.deleteText(this.displayedText.length - 1), this.pauseBetweenIcons);
  //   }
  // }

  // deleteText(charIndex: number) {
  //   if (charIndex >= 0) {
  //     this.displayedText = this.displayedText.substring(0, charIndex);
  //     setTimeout(() => this.deleteText(charIndex - 1), this.deletingSpeed);
  //   } else {
  //     this.showIcon = false;
  //     setTimeout(() => this.switchToNext(), this.pauseBetweenIcons);
  //   }
  // }

  // switchToNext() {
  //   this.currentText = (this.currentText + 1) % this.texts.length;
  //   this.currentIcon = (this.currentIcon + 1) % this.icons.length;
  //   this.showIcon = true;
  //   this.typeText(0);
  // }
}
