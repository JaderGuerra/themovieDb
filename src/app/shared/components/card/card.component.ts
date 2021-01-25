import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../models/peliculas-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cartelera: Pelicula[];
  @Input() category: string;
  constructor() {}

  ngOnInit(): void {}
}
