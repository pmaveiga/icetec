import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from '../components/list/applicant-list.component';
import { ApplicantRoutingModule } from './applicant-routing.module';

@NgModule({
  declarations: [ApplicantListComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
