import { Component, OnInit } from '@angular/core';
import { ISkillItem } from 'src/app/shared/dtos/skill-item';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  skills: ISkillItem[] = [
    {
      title: "my main skills",
      items: [
        'Frontend- / Backend-Systems',
        'HTML',
        'CSS',
        'C#',
        '.Net Core',
        'PostgreSQL',
        'ASP.Net Core',
        'Scrum',
      ]
    },
    {
      title: "further skills",
      items: [
        'Terraform',
        'SQL',
        'Blazor Webassembly',
        'Jenkins',
        'Xamarin',
        'Kanban',
      ]
    },
    {
      title: "my language skills",
      items: [
        'German - Native Language',
        'English - C1',
        'French - B2',
      ]
    }
  ]

  constructor() {}

  ngOnInit() {
  }
}
