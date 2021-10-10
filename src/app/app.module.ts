import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NewSchoolModule } from './pages/new-school/new-school.module';
import { OldSchoolModule } from './pages/old-school/old-school.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewSchoolModule,
    OldSchoolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
