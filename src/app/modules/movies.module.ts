import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/modules/shared.module';

import { MoviesMainComponent } from 'app/components/movies/main/component';
import { MoviesListComponent } from 'app/components/movies/list/component';
import { MovieDetailComponent } from 'app/components/movies/detail/component';

import { MoviesService } from 'app/services/backend/movies-service';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesMainComponent,
    children: [
      {
        path: 'list',
        component: MoviesListComponent,
      },
      {
        path: ':movieKey/detail',
        component: MovieDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    MoviesMainComponent,
    MoviesListComponent,
    MovieDetailComponent,
  ],
  providers: [MoviesService],
})
export class MoviesModule {

}
