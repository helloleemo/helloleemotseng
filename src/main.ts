import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// const globalRippleConfig: RippleGlobalOptions = {
//   disabled: false,
//   animation: {
//     enterDuration: 300,
//     exitDuration: 100,
//   }
// };

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    provideHttpClient(), provideAnimationsAsync(),
    // { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig } 
  ]
});