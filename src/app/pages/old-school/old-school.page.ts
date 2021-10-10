import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageItem } from './page-item.interface';

import { pageItemContent } from './page-item.content';

@Component({
  selector: 'gl-old-school-page',
  templateUrl: './old-school.page.html',
  styleUrls: ['./old-school.page.scss']
})
export class OldSchoolPage implements OnInit {
  selectedItem: PageItem | undefined;
  ulItems: PageItem[] = pageItemContent;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    this.selectItem(2);
    this.router.navigate([this.selectedItem?.url]);
  }

  selectItem(index: number) {
    const currentSelectedIndex = this.ulItems.findIndex(item => item.title === this.selectedItem?.title);
    if (currentSelectedIndex >= 0) {
      this.ulItems[currentSelectedIndex].active = false;
    }
    this.ulItems[index].active = true;
    this.selectedItem = this.ulItems[index];
  }
}
