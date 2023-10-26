import { Component, Input, OnInit } from '@angular/core';
import { IExperienceItem } from '../../dtos/experience-item';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {
  @Input() item: IExperienceItem = ({} as any) as IExperienceItem;
  @Input()  alternativeColor = false
  constructor() { }

  ngOnInit() {
    let color = this.alternativeColor ? "var(--background-alternative)" : "var(--background-alternative3)"
    document.body.style.setProperty('--circle-color', color);
  }

}
