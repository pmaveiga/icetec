import { AbstractService } from '../../../commons/abstract.service';
import { Technology } from '../entities/technology';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TechnologyService extends AbstractService<Technology> {
  constructor(http: HttpClient) {
    super(http, 'technology', Technology);
  }
}
