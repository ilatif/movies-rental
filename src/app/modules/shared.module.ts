import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/modules/material.module';

import { MovieComponent } from 'app/components/common/movie/component';

import { ImageLoadingDirective } from 'app/directives/image-loading';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    MovieComponent,
    ImageLoadingDirective,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MovieComponent,
    ImageLoadingDirective,
  ],
})
export class SharedModule {

}
