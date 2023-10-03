import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = ""
  @Input() teaser = ""
  constructor() { }

  ngOnInit() {
  }

}
