import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../../core/applicant/entities/applicant';
import { TechnologyService } from '../../../core/technology/services/technology.service';
import { Technology } from '../../../core/technology/entities/technology';
import { ApplicantService } from '../../../core/applicant/services/applicant.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-applicant-persist',
  templateUrl: './applicant-persist.component.html',
  styleUrls: ['../../styles/applicant-persist.component.scss']
})
export class ApplicantPersistComponent implements OnInit {

  applicant = new Applicant();
  create = true;
  technologies: Technology[] = [];
  show = false;
  selectedTechnologies: any = [];

  constructor(private technologyService: TechnologyService, private service: ApplicantService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.show = this.router.url.includes('show');
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.service.get(+params.id).subscribe((applicant: Applicant) => {
          this.create = false;
          this.applicant = applicant;
        });
      }
    });

    this.technologyService.list().subscribe((response: any) => {
      if (response.data) {
        this.technologies = response.data;
        this.getSelected();
      }
    });
  }

  save(): void {
    this.applicant.technologies = this.selectedTechnologies;
    this.service.save(this.applicant).subscribe((response: any) => {
      alert(response.message);
      this.router.navigate(['/applicant', 'list']);
    });
  }

  getSelected(): void {
    if (this.applicant.technologies) {
      for (const technology of this.applicant.technologies) {
        this.technologies.forEach((baseTechnology) => {
          if (technology.id === baseTechnology.id) {
            this.selectedTechnologies.push(baseTechnology.id);
          }
        });
      }
    }
  }
}
