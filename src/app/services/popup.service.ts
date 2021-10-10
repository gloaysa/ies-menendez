import { Injectable } from '@angular/core';

import { PopupContent } from '../popup-content.interface';

@Injectable({providedIn: 'root'})
export class PopupService {

  openWindows: Window[] = [];

  createPopUpWindow(item: PopupContent): Window | null {
    const openWin = window.open('', '', `
    toolbar=no,
    width=${item.width + 50},
    height=${item.height + 50},
    location=no,
    status=no,
    top=${this.position(1080, 0)},
    left=${this.position(1920, 50)}
    `);

    if (openWin) {
      this.openWindows.push(openWin);
    }
    return openWin;
  }

  closeAllWindows() {
    this.openWindows.forEach(win => win?.close());
    this.openWindows = [];
  }

  private position(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



}
