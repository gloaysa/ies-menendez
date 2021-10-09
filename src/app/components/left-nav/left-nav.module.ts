import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LeftNavComponent } from './left-nav.component';

@NgModule({
  declarations: [LeftNavComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftNavComponent]
})
export class LeftNavModule {}
