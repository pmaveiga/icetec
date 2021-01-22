import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantShowComponent } from '../components/show/applicant-show.component';

describe('ApplicantShowComponent', () => {
  let component: ApplicantShowComponent;
  let fixture: ComponentFixture<ApplicantShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
