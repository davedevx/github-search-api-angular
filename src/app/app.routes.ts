import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoryChartComponent } from './components/repository-chart/repository-chart.component';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/repository/search',
    pathMatch: 'full',
  },
  {
    path: 'repository/search',
    component: RepositorySearchComponent,
  },
  {
    path: 'repository/issues/:owner/:repo',
    component: RepositoryIssuesComponent,
  },
  {
    path: 'repository/chart/:owner/:repo',
    component: RepositoryChartComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
