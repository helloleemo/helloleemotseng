import { Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { IntroComponent } from './intro/intro.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ResizerComponent } from './cards/resizer/resizer.component';
import { templateComponent } from './cards/template/template.component';
import { MonitorComponent } from './cards/monitor/monitor.component';
import { SpaceComponent } from './cards/monitor/space/space.component';
import { PrivateOfficeComponent } from './cards/monitor/space/private-office/private-office.component';
import { HotDeskComponent } from './cards/monitor/space/hot-desk/hot-desk.component';
import { OpenAreaComponent } from './cards/monitor/space/open-area/open-area.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'template', component: templateComponent,
    children: [
      { path: 'resizer', component: ResizerComponent },
      { path: 'monitor',component: MonitorComponent,
        children:[
          {path:'space',component:SpaceComponent},
          {path:'private-office',component:PrivateOfficeComponent},
          {path:'hot-desk',component:HotDeskComponent},
          {path:'open-area',component:OpenAreaComponent},
        ]
       }
    ]
  },
  { path: 'articles', component: ArticlesComponent },
];