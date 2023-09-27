import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenuItems = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {
    if(window.scrollY > 50){
      document.body.style.setProperty('--navbar-border-bottom', "1px solid #000");
    }else{
      document.body.style.setProperty('--navbar-border-bottom', "none");

    }
  }

  toggleMenuItems() {
    this.showMenuItems = !this.showMenuItems;
  }
}
