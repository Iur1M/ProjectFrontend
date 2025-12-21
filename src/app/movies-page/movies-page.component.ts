import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent {
movies: any[] = [];
  searchTerm: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.api.getMovies().subscribe(res => {
      this.movies = res.items ?? res; // depending on your API shape
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.loadMovies();
      return;
    }

    this.api.searchMovies(this.searchTerm).subscribe(res => {
      this.movies = res.items ?? res;
    });
  }
}
