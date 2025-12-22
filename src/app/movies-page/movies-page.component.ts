import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent {
 movies: any[] = [];
  searchTerm = '';

  sortBy: string = '';
  desc: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.api.getMovies(this.searchTerm, this.sortBy, this.desc)
      .subscribe(res => {
        this.movies = res.items ?? res;
      });
  }

  onSearch() {
    this.loadMovies();
  }

  onSortChange(value: string) {
    if (value === '') {
      this.sortBy = '';
      this.desc = false;
    }

    if (value === 'ratingAsc') {
      this.sortBy = 'rating';
      this.desc = false;
    }

    if (value === 'ratingDesc') {
      this.sortBy = 'rating';
      this.desc = true;
    }

    this.loadMovies();
  }
}
