import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../core/applicant/services/applicant.service';
import { Applicant } from '../../../core/applicant/entities/applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['../../styles/applicant.component.scss']
})
export class ApplicantListComponent implements OnInit {

  list: Applicant[];

  constructor(private service: ApplicantService) {
    this.list = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.list().subscribe((response: any) => {
      if (response.data) {
        this.list = response.data;
      }
    });
  }

  getTechnologiesNames(technologies: any): string[] | void {
    if (technologies.data) {
      const names: string[] = [];
      technologies.data.forEach((technology: any) => names.push(technology.name));
      return names;
    }
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      alert('Deleted successfully!');
      this.getAll();
    });
  }
}
