import { Component, Input, OnInit } from '@angular/core';
import { ISkillItem } from '../../dtos/skill-item';

@Component({
  selector: 'app-skill-wrapper',
  templateUrl: './skill-wrapper.component.html',
  styleUrls: ['./skill-wrapper.component.css']
})

export class SkillWrapperComponent implements OnInit {
  @Input() data: ISkillItem[] = []
  constructor() { }

  ngOnInit() {
  }

  isFirstItem(item: ISkillItem){
    return this.data.findIndex(x => x == item) == 0
  }

}
