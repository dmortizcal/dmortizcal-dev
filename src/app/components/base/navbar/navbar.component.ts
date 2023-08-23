import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../../services/sidenav.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  viewIconMenu = true;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 800) {
      this.viewIconMenu = false;
    }
  }

  clickMenu() {
    this.sidenavService.toggleSidenav();
  }
}
