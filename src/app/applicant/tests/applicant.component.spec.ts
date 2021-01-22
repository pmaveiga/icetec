import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantListComponent } from '../components/list/applicant-list.component';

describe('ApplicantComponent', () => {
  let component: ApplicantListComponent;
  let fixture: ComponentFixture<ApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
