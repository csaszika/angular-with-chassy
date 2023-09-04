import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@exa/examples/shell').then((m: typeof import('@exa/examples/shell')) => m.WrapperComponent),
    children: [
      {
        path: 'kyton',
        loadChildren: () => import('@exa/examples/kyton'),
      },
      {
        path: 'ckody',
        loadChildren: () => import('@exa/examples/ckody'),
      },
      {
        path: 'david',
        loadChildren: () => import('@exa/examples/david'),
      },
      {
        path: 'kalamboo',
        loadChildren: () => import('@exa/examples/kalamboo'),
      },
      {
        path: 'kreatin',
        loadChildren: () => import('@exa/examples/kreatin'),
      },
      {
        path: 'lacii',
        loadChildren: () => import('@exa/examples/lacii'),
      },
      {
        path: 'lajos',
        loadChildren: () => import('@exa/examples/lajos'),
      },
      {
        path: 'peti',
        loadChildren: () => import('@exa/examples/peti'),
      },
    ],
  },
];
