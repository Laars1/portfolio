import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() tag = ""
  @Input() spacing = "p-2 me-3 mb-3"
  constructor() { }

  ngOnInit() {
  }

}
