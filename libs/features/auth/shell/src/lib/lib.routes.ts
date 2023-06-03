import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    loadChildren: async () => (await import('@app/auth/list')).ListModule,
  },
  {
    path: 'detail',
    pathMatch: 'full',
    loadChildren: async () => (await import('@app/auth/detail')).DetailModule,
  },
];
