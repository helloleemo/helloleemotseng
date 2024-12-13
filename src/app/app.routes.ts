import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./intro/intro.component').then(m => m.IntroComponent) },
  { path: 'intro', loadComponent: () => import('./intro/intro.component').then(m => m.IntroComponent) },
  { path: 'platform', loadComponent: () => import('./platform/platform.component').then(m => m.PlatformComponent) },
  {
    path: 'template',
    loadComponent: () => import('./cards/template/template.component').then(m => m.TemplateComponent),
    children: [
      { path: 'weather-api', loadComponent: () => import('./cards/weather-api/weather-api.component').then(m => m.WeatherApiComponent) },
      { path: 'to-do-list', loadComponent: () => import('./cards/to-do-list/to-do-list.component').then(m => m.ToDoListComponent) },
      { path: 'resizer', loadComponent: () => import('./cards/resizer/resizer.component').then(m => m.ResizerComponent) },
      {
        path: 'monitor',
        loadComponent: () => import('./cards/monitor/monitor.component').then(m => m.MonitorComponent),
        children: [
          { path: 'home-menu', loadComponent: () => import('./cards/monitor/monitor-content/home-menu/home-menu.component').then(m => m.HomeMenuComponent) },
          { path: 'space', loadComponent: () => import('./cards/monitor/monitor-content/space/space.component').then(m => m.SpaceComponent) },
          { path: 'private-office', loadComponent: () => import('./cards/monitor/monitor-content/space/private-office/private-office.component').then(m => m.PrivateOfficeComponent) },
          { path: 'hot-desk', loadComponent: () => import('./cards/monitor/monitor-content/space/hot-desk/hot-desk.component').then(m => m.HotDeskComponent) },
          { path: 'open-area', loadComponent: () => import('./cards/monitor/monitor-content/space/open-area/open-area.component').then(m => m.OpenAreaComponent) },
          { path: 'meeting-room', loadComponent: () => import('./cards/monitor/monitor-content/space/meeting-room/meeting-room.component').then(m => m.MeetingRoomComponent) },
          { path: 'plan', loadComponent: () => import('./cards/monitor/monitor-content/plan/plan.component').then(m => m.PlanComponent) },
        ]
      },
      {
        path: 'tracking-system',
        loadComponent: () => import('./cards/tracking-system/tracking-system.component').then(m => m.TrackingSystemComponent),
        children: [
          {path: 'shipment-summary', loadComponent: () => import('./cards/tracking-system/shipment-summary/shipment-summary.component').then(m => m.ShipmentSummaryComponent)},
          { path: 'login', loadComponent: () => import('./cards/tracking-system/login/login.component').then(m => m.LoginComponent) },
        ]
      }
    ]
  },
  { path: 'articles', loadComponent: () => import('./articles/articles/articles.component').then(m => m.ArticlesComponent) },
];
