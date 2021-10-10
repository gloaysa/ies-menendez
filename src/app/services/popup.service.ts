import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PopupService {

  openWindows: Window[] = [];

  createPopUpWindow(): Window | null {
    const openWin = window.open('', '', `
    toolbar=no,
    width=800,
    height=600,
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
