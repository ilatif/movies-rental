import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/modules/material.module';

import { GenresService } from 'app/services/backend/genres-service';

import { MovieComponent } from 'app/components/common/movie/component';

import { ImageLoadingDirective } from 'app/directives/image-loading';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    MovieComponent,
    ImageLoadingDirective,
  ],
  exports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    MovieComponent,
    ImageLoadingDirective,
  ],
  providers: [GenresService],
})
export class SharedModule {

}
