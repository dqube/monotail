import { Route } from '@angular/router';
import { LayoutComponent } from '@app/layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'classic',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/auth/shell').then((m) => m.ShellModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('@app/auth/shell').then((m) => m.ShellModule),
      },
    ],
  },
];
