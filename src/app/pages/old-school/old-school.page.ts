import { Component } from '@angular/core';

import { PageItem } from './page-item.interface';

import { pageItemContent } from './page-item.content';

@Component({
  selector: 'gl-old-school-page',
  templateUrl: './old-school.page.html',
  styleUrls: ['./old-school.page.scss']
})
export class OldSchoolPage {
  selectedItem: PageItem | undefined;
  ulItems: PageItem[] = pageItemContent;

}
