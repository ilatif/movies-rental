import { NgModule } from '@angular/core';

import { MatTableModule, MatCardModule, MatGridListModule, MatToolbarModule, MatListModule } from '@angular/material';

const modules = [
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {

}