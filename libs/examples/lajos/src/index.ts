import { Route } from '@angular/router';

import { HomeComponent } from './lib/containers/home/home.component';

export * from './lib/containers/home/home.component';

export default [{ path: '', component: HomeComponent }] as Route[];
