import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Pelicula } from 'src/app/shared/models/peliculas-interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  show: boolean;
  moviesName = '';
  movies: Pelicula[] = [];

  constructor(private _api: MoviesService, private router: Router) {}

  ngOnInit(): void {}
  verPelicula(id: string) {
    this.router.navigate(['/films', id]);
  }

  buscarPelicula(texto = 'a') {
    if (texto.length > 0) {
      this.show = true;
      this._api.searchMovies(texto).subscribe((peliculas: any) => {
        this.movies = peliculas;
        this.show = false;
        this.moviesName = texto;
      });
    } else {
      return;
    }
  }
}
