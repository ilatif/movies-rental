import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
})
export class AppComponent {
  title = 'movies-rental';
  displayedColumns = ['id', 'name'];
  dataSource = [
    {
      id: '1',
      name: 'Movie 1',
    },
    {
      id: '2',
      name: 'Movie 2',
    },
    {
      id: '3',
      name: ' Movie 3',
    }
  ]
}
