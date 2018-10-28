import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/modules/material.module';

import { MovieComponent } from 'app/components/common/movie/component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    MovieComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MovieComponent,
  ],
})
export class SharedModule {

}
