import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
private baseUrl = 'https://localhost:7220/api/movie';

  constructor(private http: HttpClient) {}

  getMovies() {
  return this.http.get<any>('https://localhost:7220/api/movie?pageSize=50');
}

searchMovies(search: string) {
  return this.http.get<any>(
    `https://localhost:7220/api/movie?search=${encodeURIComponent(search)}&pageSize=50`
  );
}
}