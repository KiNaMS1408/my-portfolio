import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';

Component({
  selector: 'app-theme.animations',
  standalone: true,
  imports: [],
  templateUrl: './theme.animations.component.html',
  styleUrl: './theme.animations.component.scss'
})

export const iconSwitchAnimation = trigger('iconSwitch', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' })),
  ]),
]);

export const sunAnimation = trigger('sunAnimation', [
  transition(':enter', [
    animate('2.5s ease', keyframes([
      style({ color: 'yellow', transform: 'scale(0.5)', offset: 0.2 }),
      style({ color: 'currentColor', transform: 'scale(1)', offset: 1.0 })
    ])),
    query('.ray', [
      style({ opacity: 0, transform: 'rotate(0deg)' }),
      stagger(1000, [
        animate('1.5s ease-out', keyframes([
          style({ opacity: 0, transform: 'rotate(0deg)', offset: 0 }),
          style({ opacity: 0, transform: 'rotate(20deg)', offset: 0.5 }),
          style({ opacity: 1, transform: 'rotate(0deg)', offset: 1 })
        ]))
      ])
    ], { optional: true })
  ])
]);

export const moonAnimation = trigger('moonAnimation', [
  transition(':enter', [
    animate('1s ease-out', keyframes([
      style({ color: 'royalblue', transform: 'scale(0.2)', offset: 0.2 }),
      style({ transform: 'scale(1)', offset: 1.0 })
    ]))
  ])
]);