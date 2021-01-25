import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/services/auth.service';
import { ApplicantService } from './applicant/services/applicant.service';
import { TokenInterceptor } from './auth/interceptor/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TechnologyService } from './technology/services/technology.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    ApplicantService,
    TechnologyService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ]
})
export class CoreModule {
}
