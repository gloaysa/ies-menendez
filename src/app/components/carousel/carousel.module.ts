import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    NgbCarouselModule,
    CommonModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule {}
