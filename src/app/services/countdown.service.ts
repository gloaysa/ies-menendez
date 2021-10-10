import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountdownService {
  private _seconds: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private timer: any;

  get seconds(): Observable<number> {
    return this._seconds;
  }

  startCountDown() {
    let secs = 0;
    this.timer = setInterval(() => {
      secs += 1;
      this._seconds.next(secs);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }
}
