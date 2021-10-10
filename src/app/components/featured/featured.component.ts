import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
}
