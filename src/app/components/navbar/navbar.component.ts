import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  viewIconMenu = true

  constructor() {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 800) {
      this.viewIconMenu = false;
    }
  }

  clickMenu() {

  }
}
