import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {

  @Input() alternativeColor = false;
  constructor() { }

  ngOnInit() {
  }

}
