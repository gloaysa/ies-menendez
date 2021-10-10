import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedComponent } from './featured.component';

@NgModule({
  declarations: [FeaturedComponent],
  exports: [FeaturedComponent],
  imports: [CommonModule]
})
export class FeaturedModule {}
