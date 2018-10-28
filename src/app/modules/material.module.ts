import { NgModule } from '@angular/core';

import { MatTableModule, MatCardModule, MatGridListModule, MatToolbarModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';

const modules = [
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {

}