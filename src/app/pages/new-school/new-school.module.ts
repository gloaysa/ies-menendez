import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from '../../components/carousel/carousel.module';
import { HeaderModule } from '../../components/header/header.module';
import { LeftNavModule } from '../../components/left-nav/left-nav.module';
import { PostModule } from '../../components/post/post.module';

import { NewSchoolPage } from './new-school.page';

@NgModule({
  declarations: [NewSchoolPage],
  exports: [NewSchoolPage],
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
