import { Component, Input, OnInit } from '@angular/core';
import { IGithubProject } from '../../dtos/github-project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() data: IGithubProject[] = []
  constructor() { }

  ngOnInit() {
  }

}
