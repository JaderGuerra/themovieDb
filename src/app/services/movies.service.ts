import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getQuerys(query: string) {
    const url = `https://api.themoviedb.org/3/movie/${query}`;
    return this.http.get(`${url}`);
  }

  getFilmsCartelera() {
    return this.getQuerys('upcoming').pipe(
      map((resp: any) => {
        return resp.results.map((datos) => {
          return {
            id: datos.id,
            imagen: datos.poster_path,
            background: datos.backdrop_path,
            titulo: datos.title,
            puntuacion: datos.vote_average,
          };
        });
      })
    );
  }

  getFilmsPopulares() {
    return this.getQuerys('popular').pipe(
      map((resp: any) => {
        return resp.results.map((datos) => {
          return {
            id: datos.id,
            imagen: datos.poster_path,
            background: datos.backdrop_path,
            titulo: datos.title,
            puntuacion: datos.vote_average,
          };
        });
      })
    );
  }

  getFilmsTopRated() {
    return this.getQuerys('top_rated').pipe(
      map((resp: any) => {
        return resp.results.map((datos) => {
          return {
            id: datos.id,
            imagen: datos.poster_path,
            background: datos.backdrop_path,
            titulo: datos.title,
            puntuacion: datos.vote_average,
          };
        });
      })
    );
  }

  searchMovies(movie: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?&query=${movie}&include_adult=false`
      )
      .pipe(
        map((resp: any) => {
          return resp.results.map((datos) => {
            return {
              id: datos.id,
              imagen: datos.poster_path,
              background: datos.backdrop_path,
              titulo: datos.title,
              puntuacion: datos.vote_average,
            };
          });
        })
      );
  }
}
