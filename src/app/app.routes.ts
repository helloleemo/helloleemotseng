import { Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { IntroComponent } from './intro/intro.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ResizerComponent } from './cards/resizer/resizer.component';
import { templateComponent } from './cards/template/template.component';
import { MonitorComponent } from './cards/monitor/monitor.component';




import { HomeMenuComponent } from './cards/monitor/monitor-content/home-menu/home-menu.component';

import { PlanComponent } from './cards/monitor/monitor-content/plan/plan.component';
import { SpaceComponent } from './cards/monitor/monitor-content/space/space.component';
import { PrivateOfficeComponent } from './cards/monitor/monitor-content/space/private-office/private-office.component';
import { HotDeskComponent } from './cards/monitor/monitor-content/space/hot-desk/hot-desk.component';
import { OpenAreaComponent } from './cards/monitor/monitor-content/space/open-area/open-area.component';
import { MeetingRoomComponent } from './cards/monitor/monitor-content/space/meeting-room/meeting-room.component';
import { TrackingSystemComponent } from './cards/tracking-system/tracking-system.component';
import { LoginComponent } from './cards/tracking-system/login/login.component';
import { ToDoListComponent } from './cards/to-do-list/to-do-list.component';
import { WeatherApiComponent } from './cards/weather-api/weather-api.component';



export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'platform', component: PlatformComponent },
  {
    path: 'template', component: templateComponent,
    children: [
      { path:'weather-api',component:WeatherApiComponent},
      { path:'to-do-list',component: ToDoListComponent},
      { path:'resizer', component: ResizerComponent },
      {
        path: 'monitor', component: MonitorComponent,
        children: [
          { path: 'home-menu', component: HomeMenuComponent },
          { path: 'space', component: SpaceComponent },
          { path: 'private-office', component: PrivateOfficeComponent },
          { path: 'hot-desk', component: HotDeskComponent },
          { path: 'open-area', component: OpenAreaComponent },
          { path: 'meeting-room', component: MeetingRoomComponent },
          { path: 'plan', component: PlanComponent },
        ]
      },
      {
        path: 'tracking-system', component: TrackingSystemComponent,
        children: [
          { path: 'login', component: LoginComponent },
        ]
      }
    ]
  },
  { path: 'articles', component: ArticlesComponent },
];