import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NewSchoolModule } from './pages/new-school/new-school.module';
import { OldSchoolModule } from './pages/old-school/old-school.module';

import { AppComponent } from './app.component';
import { BloodyTextComponent } from './components/bloody-text/bloody-text.component';
import { AbcComponent } from './news/abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodyTextComponent,
    AbcComponent
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
