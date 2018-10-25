import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material';

const modules = [
  MatTableModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {

}