import { Component } from '@angular/core';

import { LeftNavContent } from './left-nav-content.interface';

import { leftNavContent } from './left-nav.content';

@Component({
  selector: 'gl-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  contentList: LeftNavContent[] = leftNavContent;
}
