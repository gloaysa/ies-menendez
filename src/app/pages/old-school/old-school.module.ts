import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturedModule } from '../../components/featured/featured.module';
import { OldSchoolRoutingModule } from './old-school.routing.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { OldPostComponent } from './news/old-post/old-post.component';

import { OldSchoolPage } from './old-school.page';

@NgModule({
  declarations: [OldSchoolPage, NewsComponent, HomeComponent, AboutUsComponent, OldPostComponent],
  exports: [OldSchoolPage],
  imports: [
    CommonModule,
    FeaturedModule,
    RouterModule,
    OldSchoolRoutingModule
  ]
})
export class OldSchoolModule {}
