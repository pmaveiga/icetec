import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPersistComponent } from '../components/persist/applicant-persist.component';

describe('ApplicantPersistComponent', () => {
  let component: ApplicantPersistComponent;
  let fixture: ComponentFixture<ApplicantPersistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantPersistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
