import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movies-main',
  templateUrl: './template.html',
})
export class MoviesMainComponent {

  constructor(private cd: ChangeDetectorRef) {

  }

}
