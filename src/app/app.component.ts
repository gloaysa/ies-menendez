import { Component, OnInit } from '@angular/core';

import { CountdownService } from './services/countdown.service';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'gl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ies-menendez';

  oldSchool = false;

  showBloodyText = false;

  popUpContent = [
    1, 2, 3, 4, 5
  ];

  private interval: any;

  constructor(
    private readonly countService: CountdownService,
    private readonly popUpService: PopupService
  ) {
  }

  ngOnInit() {
    this.countService.startCountDown();
    this.popUpContent.forEach((item) => {
      this.popUpService.createPopUpWindow();
    });
    this.countService.seconds.subscribe((second) => {
      if (second === 5) {
        this.showBloodyText = true;
      }

      if (second === 10) {
        this.startTheParty(50);
        this.popUpContent.forEach((item) => {
          this.popUpService.createPopUpWindow();
        });

      }

      if (second === 12) {
        this.startTheParty(500);
      }

      if (second === 14) {
        this.startTheParty(1000);
      }

      if (second === 16) {
        this.stopItAll();
        this.popUpService.closeAllWindows();
        this.showBloodyText = false;
        this.oldSchool = true;
        this.countService.stopTimer();
      }
    });
  }

  private startTheParty(interval: number) {
    this.stopItAll();
    this.interval = setInterval(() => {
      this.oldSchool = !this.oldSchool;
    }, interval);
  }

  private stopItAll() {
    clearInterval(this.interval);
  }
}
