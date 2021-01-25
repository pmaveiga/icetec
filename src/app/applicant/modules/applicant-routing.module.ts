import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from '../components/list/applicant-list.component';
import { ApplicantPersistComponent } from '../components/persist/applicant-persist.component';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: 'applicant', canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ApplicantListComponent },
      { path: 'create', component: ApplicantPersistComponent },
      { path: 'edit/:id', component: ApplicantPersistComponent },
      { path: 'show/:id', component: ApplicantPersistComponent },
      { path: '**', redirectTo: '/not-found' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule {
}
