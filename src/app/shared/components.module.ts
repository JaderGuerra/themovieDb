import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NoImgPipe } from './pipes/no-img.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [CardComponent, NoImgPipe, FilterPipe],
  imports: [CommonModule],
  exports: [CardComponent, NoImgPipe, FilterPipe],
})
export class SharedModule {}
