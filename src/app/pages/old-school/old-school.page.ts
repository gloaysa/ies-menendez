import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const url = event.url.replace('/', '').trim();
        this.selectedItem = this.ulItems.find((item) => item.url === url);
    });
  }

}
