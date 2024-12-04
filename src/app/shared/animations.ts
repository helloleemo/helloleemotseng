import { trigger, state, style, transition, animate } from '@angular/animations';

export const fullPageBlurAnimation = trigger('fullPageBlur', [
  state('blur', style({
    opacity: 0,
    filter: 'blur(20px)',
    display: 'block',
  })),
  state('clear', style({
    opacity: 1,
    filter: 'blur(0)',
    display: 'none',

  })),
  transition('blur => clear', [
    animate('2s ease-out'),
  ]),
  transition('clear => blur', [
    animate('2s ease-in'),
  ]),
]);
