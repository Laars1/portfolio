import { Component, OnInit } from '@angular/core';
import { ISkillItem } from 'src/app/shared/dtos/skill-item';
import { MockdataService } from 'src/app/shared/services/mockdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  skills: ISkillItem[] = []

  constructor(private service: MockdataService) {}

  ngOnInit() {
    this. skills = this.service.getSkillitems()
  }
}
