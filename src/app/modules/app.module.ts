import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'app/modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'app/modules/shared.module';

import { AppComponent } from 'app/components/app/component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
