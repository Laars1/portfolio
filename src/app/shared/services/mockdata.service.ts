import { Injectable } from '@angular/core';
import { ISkillItem } from '../dtos/skill-item';
import { IExperienceItem } from '../dtos/experience-item';
import { IsActiveMatchOptions } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MockdataService {
  constructor() {}

  getSkillitems(): ISkillItem[] {
    return [
      {
        title: 'my main skills',
        items: [
          'Frontend- / Backend-Systems',
          'HTML',
          'CSS',
          'C#',
          '.Net Core',
          'PostgreSQL',
          'ASP.Net Core',
          'Scrum',
        ],
      },
      {
        title: 'further skills',
        items: [
          'Terraform',
          'SQL',
          'Blazor Webassembly',
          'Jenkins',
          'Xamarin',
          'Kanban',
        ],
      },
      {
        title: 'my language skills',
        items: ['German - Native Language', 'English - C1', 'French - B2'],
      },
    ] as ISkillItem[];
  }

  getExperienceItems(): IExperienceItem[] {
    return [
      {
        jobtitle: 'Software-Engineer and Coach ICT Academy',
        companyName: 'Swiss Post',
        timerange: 'August 2020 - present',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle:
          'Apprenticeship as Information Technologist and in specialism application development',
        companyName: 'Swiss Post',
        timerange: 'August 2016 - July 2020',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
    ] as IExperienceItem[];
  }

  getEducationItems(): IExperienceItem[] {
    return [
      {
        jobtitle: "Bachelor's degree in Business Information Technology",
        companyName: 'Bern Universityof Applied Sciences',
        timerange: 'September 2021 - July 2025',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Apprenticeship Educator',
        companyName: 'berufsbildner.ch',
        timerange: 'November 2020',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Federal Vocational Baccalaureate',
        companyName: 'gibb',
        timerange: 'August 2016 - July 2020',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Apprenticeship training',
        companyName: 'gibb',
        timerange: 'August 2016 - July 2020',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
        place: 'Bern, Switzerland',
      },
    ] as IExperienceItem[];
  }
}
