import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg',
})
export class NoImgPipe implements PipeTransform {
  transform(imagenes: any): any {
    let url = 'https://image.tmdb.org/t/p/w300';

    if (imagenes.imagen) {
      return url + imagenes?.imagen;
    } else {
      if (imagenes.background) {
        return url + imagenes?.background;
      } else {
        return '../assets/noImagen.jpg';
      }
    }
  }
}
