import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gl-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturedComponent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
}
