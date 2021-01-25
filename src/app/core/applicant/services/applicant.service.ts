import { Injectable } from '@angular/core';
import { AbstractService } from '../../../commons/abstract.service';
import { Applicant } from '../entities/applicant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService extends AbstractService<Applicant>{
  constructor(http: HttpClient) {
    super(http, 'applicant', Applicant);
  }
}
