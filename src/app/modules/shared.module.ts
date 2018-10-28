import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/modules/material.module';

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
})
export class SharedModule {

}
