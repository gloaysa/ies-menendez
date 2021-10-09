import { Component } from '@angular/core';

import { carouselContent } from './carousel.content';

@Component({
  selector: 'gl-slider',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images = carouselContent;

}
