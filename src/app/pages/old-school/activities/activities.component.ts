import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';
import { Folder } from './folder.interface';

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
  currentPdfSrc = '/assets/docs/intro.pdf';

  folders: Folder[] = [
    {
      title: 'The forbidden floor',
      image: '/assets/images/old_school/folder_secret.png',
      content: '/assets/docs/intro.pdf',
      type: 'pdf'
    },
    {
      title: 'The forbidden floor: video',
      image: '/assets/images/old_school/folder_video.png',
      content: '/assets/video/video1.mov',
      type: 'video'
    },
    { title: 'Trailer',
      image: '/assets/images/old_school/folder_trailer.png',
      content: '/assets/video/trailer.mov',
      type: 'video'
    },
    {
      title: 'Secret Record',
      image: '/assets/images/old_school/folder_classified.png',
      type: 'classified'
    },
    {
      title: 'Secret Record',
      image: '/assets/images/old_school/folder_classified.png',
      type: 'classified'
    },
  ];

  private pdfViewerOpen = false;

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (this.pdfViewerOpen && this.pdfViewer) {
      if (event.key === KEY_CODE.RIGHT_ARROW) {
        if (!this.pdfViewer.lastPage) {
          this.pdfViewer.page = ++this.page;
        }
      }

      if (event.key === KEY_CODE.LEFT_ARROW) {
        if (this.page > 1) {
          this.pdfViewer.page = --this.page;
        }
      }

      if (event.key === KEY_CODE.ESCAPE) {
        this.pdfViewerOpen = false;
      }
    }
  }

  onClick(item: Folder) {
    if (item.type === 'pdf') {
      if (this.pdfViewer && item.content) {
        this.currentPdfSrc = item.content;
        this.pdfViewer.PDFViewerApplication.requestPresentationMode();
        this.pdfViewerOpen = true;
        return;
      }
    }
    if (item.type === 'video') {
      if (item.content) {
        this.playVideo(item.content);
        return;
      }
    }
  }

  private playVideo(src: string) {
    if (this.video) {
      this.video.nativeElement.requestFullscreen();
      this.video.nativeElement.src = src;
      this.video.nativeElement.onfullscreenchange = () => {
        this.video?.nativeElement.pause();
      };
    }
  }

}
