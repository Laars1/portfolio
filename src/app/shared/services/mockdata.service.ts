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
        jobtitle: 'Software-Engineer',
        companyName: 'Swiss Post',
        timerange: 'December 2023 - present',
        description:
          'As a software developer in the sorting cluster at the Swiss Post, I work in a team that is currently developing an application for tracking lost shipments. Due to the re-development, quality and efficient case analysis are the main priorities.',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Software-Engineer and Coach ICT Academy',
        companyName: 'Swiss Post',
        timerange: 'August 2020 - November 2023',
        description:
          'Dual role as software engineer and coach at ICT Academy. On the one hand, the focus is on the methodical and technical training of apprentices in an interdisciplinary team of apprentices. On the other hand, I worked on internal customer projects. There I can gain my experience as a full-stack developer as well as a Scrum master.',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle:
          'Apprenticeship as Information Technologist and in specialism application development',
        companyName: 'Swiss Post',
        timerange: 'August 2016 - July 2020',
        description:
          'training as a software engineer. during the four years i worked in two different teams and was able to apply the theory i had learned in practice. I gained the most experience in web development with .Net and Angular.',
        place: 'Bern, Switzerland',
      },
    ] as IExperienceItem[];
  }

  getEducationItems(): IExperienceItem[] {
    return [
      {
        jobtitle: "Bachelor's degree in Business Information Technology",
        companyName: 'Bern University of Applied Sciences',
        timerange: 'September 2021 - July 2025',
        description:
          "I'm currently pursuing a degree in Business Information Technology at the University of Applied Science, where I'm gaining a deep understanding of how technology drives business innovation. This program provides me with a well-rounded education, combining the principles of IT with the strategic aspects of business to prepare me for a diverse range of opportunities in the tech industry.",
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Apprenticeship Educator',
        companyName: 'berufsbildner.ch',
        timerange: 'November 2020',
        description:
          'Through the two-week course, I acquired the theoretical skills to instruct apprentices.',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Federal Vocational Baccalaureate',
        companyName: 'gibb',
        timerange: 'August 2016 - July 2020',
        place: 'Bern, Switzerland',
      },
      {
        jobtitle: 'Apprenticeship training',
        companyName: 'gibb',
        timerange: 'August 2016 - July 2020',
        description:
          'Vocational school for training as a software engineer',
        place: 'Bern, Switzerland',
      },
    ] as IExperienceItem[];
  }
}
