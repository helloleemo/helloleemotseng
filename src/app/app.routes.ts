import { Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { IntroComponent } from './intro/intro.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ResizerComponent } from './cards/resizer/resizer.component';
import { templateComponent } from './cards/template/template.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'template', component: templateComponent,
    children: [
      { path: 'resizer', component: ResizerComponent },
    ]
  },
  { path: 'articles', component: ArticlesComponent },
];