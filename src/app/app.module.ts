import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicantModule } from './applicant/modules/applicant.module';
import { ApplicantPersistComponent } from './applicant/components/persist/applicant-persist.component';
import { ApplicantShowComponent } from './applicant/components/show/applicant-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantPersistComponent,
    ApplicantShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    ApplicantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
