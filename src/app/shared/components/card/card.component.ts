import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../models/peliculas-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cartelera: Pelicula[];
  @Input() category: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verPelicula(id: string) {
    this.router.navigate(['/films', id]);
  }
}
