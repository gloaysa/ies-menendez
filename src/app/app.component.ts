import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef, OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

import { AbcComponent } from './news/abc/abc.component';

import { CountdownService } from './services/countdown.service';
import { PopupService } from './services/popup.service';

import { PopupContent } from './popup-content.interface';

import { popupContent } from './popup.content';

@Component({
  selector: 'gl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement> | undefined;
  title = 'ies-menendez';

  thePartyHasStarted = false;

  oldSchool = false;

  showBloodyText = false;

  playingVideo = false;

  popUpContent: PopupContent[] = popupContent;

  private interval: any;

  constructor(
    private readonly countService: CountdownService,
    private readonly popUpService: PopupService,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(['news']);
  }

  goToOldSchool() {
    this.router.navigate(['activities'])
      .then(() => this.oldSchool = true);
  }

  startTheParty() {
    this.thePartyHasStarted = true;

    this.countService.startCountDown();

    this.countService.seconds.subscribe((second) => {
      if (second === 1) {
        this.showBloodyText = true;
      }

      if (second === 5) {
        this.quicklySwitchPages(1000);
      }

      if (second === 10) {
        this.quicklySwitchPages(200);
      }

      if (second === 12) {
        this.quicklySwitchPages(50);
        this.playAudio('cacophony.mp3');
        this.popUpContent.forEach((item, i) => {
          setTimeout(() => {
            this.createWindow(item);
          }, i * 1000);
        });
      }

      if (second === 20) {
        this.stopItAll();
        this.popUpService.closeAllWindows();
        this.showBloodyText = false;
        this.oldSchool = true;
      }

      if (second === 22) {
        if (this.video) {
          this.playingVideo = true;

          setTimeout(() => {
            this.video?.nativeElement.requestFullscreen();
            this.video?.nativeElement.play();
          }, 2000);


          this.video.nativeElement.onended = () => {
            this.playingVideo = false;
            this.countService.stopTimer();
            this.router.navigate(['activities']);
          };
        }
      }
    });
  }

  private quicklySwitchPages(interval: number) {
    this.stopItAll();
    this.interval = setInterval(() => {
      this.oldSchool = !this.oldSchool;
    }, interval);
  }

  private stopItAll() {
    clearInterval(this.interval);
  }

  private createWindow(item: PopupContent) {
    this.playAudio('erro.mp3');
    const factory = this.resolver.resolveComponentFactory(AbcComponent);
    const comp: ComponentRef<AbcComponent> = this.viewContainerRef.createComponent(factory);
    comp.instance.url = item.url;
    comp.instance.width = item.width;
    comp.instance.height = item.height;

    const win = this.popUpService.createPopUpWindow(item);
    if (win) {
      win.document.body.append(comp.location.nativeElement);
      win.document.title = item.name;
    }
  }

  private playAudio(fileName: string) {
    const audio = new Audio();
    audio.src = `/assets/audio/${fileName}`;
    audio.load();
    audio.play();
  }
}
