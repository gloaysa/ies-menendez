import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from '../../components/carousel/carousel.module';
import { HeaderModule } from '../../components/header/header.module';
import { LeftNavModule } from '../../components/left-nav/left-nav.module';
import { PostModule } from '../../components/post/post.module';

import { NewSchoolComponent } from './new-school.component';

@NgModule({
  declarations: [NewSchoolComponent],
  exports: [NewSchoolComponent],
  imports: [
    CommonModule,
    HeaderModule,
    LeftNavModule,
    PostModule,
    CarouselModule,
    NgbModule
  ],
})
export class NewSchoolModule {}
