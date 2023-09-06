import { Route } from '@angular/router';

import { HomeComponent } from './lib/containers/home/home.component';
import { NavigationComponent } from './lib/containers/navigation/navigation.component';

export * from './lib/containers/home/home.component';

export default [
  { path: '', component: HomeComponent },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
] as Route[];
