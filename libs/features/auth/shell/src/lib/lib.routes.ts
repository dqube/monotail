import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: async () => (await import('@app/auth/list')).ListModule,
  },
  {
    path: 'detail',
    pathMatch: 'full',
    loadChildren: async () => (await import('@app/auth/detail')).DetailModule,
  },
];
