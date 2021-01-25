import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Pelicula } from 'src/app/shared/models/peliculas-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieDetails: any = {};

  constructor(
    private _api: MoviesService,
    private ar: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.ar.snapshot.paramMap.get('id');

    this._api.seletedMovie(id).subscribe((movie: Pelicula) => {
      console.log(movie);
      this.movieDetails = movie;
    });
  }

  back() {
    this.location.back();
  }
}
