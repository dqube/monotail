import { Route } from '@angular/router';
import { LayoutComponent } from '@app/layout';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: LayoutComponent,
    data: {
      layout: 'classic',
    },
    loadChildren: () => import('@app/auth/shell').then((m) => m.ShellModule),
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   data: {
  //     layout: 'empty',
  //   },
  //   children: [
  //     {
  //       path: 'auth',
  //       loadChildren: () =>
  //         import('@app/auth/shell').then((m) => m.ShellModule),
  //     },
  //   ],
  // },
];
