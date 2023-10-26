import { Component, OnInit } from '@angular/core';
import { IExperienceItem } from 'src/app/shared/dtos/experience-item';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceItems: IExperienceItem[] = [  {
    jobtitle: "Software-Engineer and Coach ICT Academy",
    companyName: "Swiss Post",
    timerange: "August 2020 - present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
  },
  {
    jobtitle: "Apprenticeship as Information Technologist and in specialism application development",
    companyName: "Swiss Post",
    timerange: "August 2016 - July 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
  }
]


educationItems: IExperienceItem[] = [{
  jobtitle: "Bachelor's degree in Business Information Technology",
    companyName: "Bern Universityof Applied Sciences",
    timerange: "September 2021 - July 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
},
{
  jobtitle: "Apprenticeship Educator",
    companyName: "berufsbildner.ch",
    timerange: "November 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
},
{
  jobtitle: "Federal Vocational Baccalaureate",
    companyName: "gibb",
    timerange: "August 2016 - July 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
},
{
  jobtitle: "Apprenticeship training",
    companyName: "gibb",
    timerange: "August 2016 - July 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    place: "Bern, Switzerland"
}]
  constructor() { }

  ngOnInit() {
  }

}
