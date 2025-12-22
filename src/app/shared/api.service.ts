import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:7220/api/movie';

  constructor(private http: HttpClient) {}

  getMovies(
    search?: string,
    sortBy?: string,
    desc: boolean = false
  ) {
    let params = new HttpParams()
      .set('pageSize', '50');

    if (search && search.trim()) {
      params = params.set('search', search);
    }

    if (sortBy) {
      params = params
        .set('sortBy', sortBy)
        .set('desc', desc.toString());
    }

    return this.http.get<any>(this.baseUrl, { params });
  }
}