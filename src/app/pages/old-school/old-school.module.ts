import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OldSchoolPage } from './old-school.page';

@NgModule({
  declarations: [OldSchoolPage],
  exports: [OldSchoolPage],
  imports: [
    CommonModule
  ]
})
export class OldSchoolModule {}
