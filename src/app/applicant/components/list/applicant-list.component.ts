import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../core/applicant/services/applicant.service';
import { Applicant } from '../../../core/applicant/entities/applicant';
import { TechnologyService } from '../../../core/technology/services/technology.service';
import { Technology } from '../../../core/technology/entities/technology';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['../../styles/applicant.component.scss']
})
export class ApplicantListComponent implements OnInit {

  list: Applicant[];
  technologies: any = [];

  constructor(private service: ApplicantService, private technologyService: TechnologyService) {
    this.list = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.list().subscribe((response: any) => {
      if (response && response.data) {
        this.list = response.data;
      }
    });

    this.technologyService.list().subscribe((response: any) => {
      if (response && response.data) {
        this.technologies = response.data;
      }
    });
  }

  getTechnologiesNames(technologies: any): string[] | void {
    const technologyList = technologies.hasOwnProperty('data') ? technologies.data : technologies;
    if (technologyList) {
      const names: string[] = [];
      technologyList.forEach((technology: any) => names.push(technology.name));
      return names;
    }
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      alert('Deleted successfully!');
      this.getAll();
    });
  }

  find(technology: any): void {
    if (!technology.value) {
      this.getAll();
      return;
    }

    this.service.find(technology.value).subscribe((response: any) => {
      this.list = [];
      response.data.forEach((object: any) => this.list.push(new Applicant(object)));
    });
  }
}
