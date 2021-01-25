import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from '../components/list/applicant-list.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantPersistComponent } from '../components/persist/applicant-persist.component';
import { FormsModule } from '@angular/forms';
import { ApplicantShowComponent } from '../components/show/applicant-show.component';

@NgModule({
  declarations: [ApplicantListComponent, ApplicantPersistComponent, ApplicantShowComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    FormsModule
  ]
})
export class ApplicantModule { }
