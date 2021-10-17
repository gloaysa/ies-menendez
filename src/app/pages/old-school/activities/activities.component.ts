import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

import { KEY_CODE } from './key-code.enum';

@Component({
  selector: 'gl-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.scss']
})
export class ActivitiesComponent {
  @ViewChild('pdfViewer') pdfViewer: PdfJsViewerComponent | undefined;
  @ViewChild('video') video: ElementRef<HTMLVideoElement> | undefined;

  page = 1;

  folders = [
    {
      title: 'The forbidden floor',
      src: '/assets/images/old_school/folder_secret.png',
      content: '/assets/docs/intro.pdf'
    },
    { title: 'Trailer', src: '/assets/images/old_school/folder_trailer.png'},
    {
      title: 'Secret Record',
      src: '/assets/images/old_school/folder_classified.png',
      classified: true
    },
    {
      title: 'Secret Record',
      src: '/assets/images/old_school/folder_classified.png',
      classified: true
    },
  ];

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW && this.pdfViewer) {
      if (!this.pdfViewer.lastPage) {
        this.pdfViewer.page = ++this.page;
      }
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW && this.pdfViewer) {
      if (this.page > 1) {
        this.pdfViewer.page = --this.page;
      }
    }
  }

  onClick(item: any) {
    switch (item.title) {
      case 'The forbidden floor':
        if (this.pdfViewer) {
          this.pdfViewer.PDFViewerApplication.requestPresentationMode();
        }
        break;
      case 'Trailer':
        if (this.video) {
          this.video.nativeElement.requestFullscreen();
          this.video.nativeElement.onfullscreenchange = () => {
            this.video?.nativeElement.pause();
          };
        }
        break;
      default:
        break;
    }
  }

}
