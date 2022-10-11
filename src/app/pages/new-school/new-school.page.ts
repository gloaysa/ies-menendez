import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-new-school-page',
  templateUrl: './new-school.page.html',
  styleUrls: ['./new-school.page.scss']
})
export class NewSchoolPage {
  @Input() partyHasStarted = false;
  @Output() startTheParty = new EventEmitter();
  @Output() goToOldSchoolWithoutParty = new EventEmitter();

  bannerClicked() {
    if (!this.partyHasStarted) {
      this.startTheParty.emit();
    }
  }

  goToOldSchool() {
    this.goToOldSchoolWithoutParty.emit();
  }

}
