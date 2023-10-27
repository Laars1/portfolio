import { Component, OnInit } from '@angular/core';
import { IExperienceItem } from 'src/app/shared/dtos/experience-item';
import { MockdataService } from 'src/app/shared/services/mockdata.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceItems: IExperienceItem[] = [];
  educationItems: IExperienceItem[] = [];

  constructor(private service: MockdataService) {}

  ngOnInit() {
    this.experienceItems = this.service.getExperienceItems();
    this.educationItems = this.service.getEducationItems()
  }
}
