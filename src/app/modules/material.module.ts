import { NgModule } from '@angular/core';

import { MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule } from '@angular/material';

const modules = [
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {

}