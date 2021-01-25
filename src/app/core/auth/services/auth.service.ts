import { AbstractService } from '../../../commons/abstract.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class UserCredentials {
  email = '';
  password = '';
}

@Injectable()
export class AuthService extends AbstractService<AuthService> {

  constructor(http: HttpClient) {
    super(http, 'auth');
  }

  authenticate(data: UserCredentials): Observable<any> {
    try {
      return this.http.post(`${ this.baseUrl }/login`, { ...data });
    } catch (e) {
      throw e;
    }
  }
}
