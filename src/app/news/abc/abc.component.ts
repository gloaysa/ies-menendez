import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gl-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AbcComponent {
  @Input() width = 0;
  @Input() height = 0;
  @Input() set url(url: string) {
    this.imagePath = `https://pandemiasoftware.com${url}`;
  }

  imagePath = '';
}
