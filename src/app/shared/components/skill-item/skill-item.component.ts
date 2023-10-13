import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() tag = ""
  @Input() spacing = "p-2 me-3 mb-3"
  constructor() { }

  ngOnInit() {
  }

}
