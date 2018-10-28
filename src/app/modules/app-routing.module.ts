import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'app/components/common/page-not-found/component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies/list',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
