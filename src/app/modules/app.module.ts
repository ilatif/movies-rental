import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'app/modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'app/modules/material.module';
import { MoviesModule } from 'app/modules/movies.module';

import { AppComponent } from 'app/components/app/component';
import { PageNotFoundComponent } from 'app/components/common/page-not-found/component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MoviesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
