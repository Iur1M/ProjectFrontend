import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: 'movie-detail-page.component.html',
  styleUrls: ['movie-detail-page.component.css']
})
export class MovieDetailPageComponent {
  movie: any;
  safeTrailerUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getMovieById(id).subscribe(movie => {
      this.movie = movie;
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        movie.trailerUrl
      );
    });
  }

  watchNow() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/movies']);
  }
}
