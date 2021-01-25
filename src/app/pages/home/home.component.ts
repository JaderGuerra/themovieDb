import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/shared/models/peliculas-interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmsCartelera: Pelicula[] = [];
  filmsPopulares: Pelicula[] = [];
  filmsTopRated: Pelicula[] = [];

  constructor(public _api: MoviesService) {}

  ngOnInit(): void {
    this._api
      .getFilmsCartelera()
      .subscribe((resp) => (this.filmsCartelera = resp));

    this._api
      .getFilmsPopulares()
      .subscribe((resp) => (this.filmsPopulares = resp));

    this._api
      .getFilmsTopRated()
      .subscribe((resp) => (this.filmsTopRated = resp));
  }
}
