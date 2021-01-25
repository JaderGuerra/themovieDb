import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NoImgPipe } from './pipes/no-img.pipe';

@NgModule({
  declarations: [CardComponent, NoImgPipe],
  imports: [CommonModule],
  exports: [CardComponent, NoImgPipe],
})
export class SharedModule {}
