import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isSidenavOpen = false;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    this.sidenavService.isSidenavOpen$.subscribe(isOpen => {
      this.isSidenavOpen = isOpen;
    });
  }

  closeSidenav() {
    if (this.isSidenavOpen) {
      this.sidenavService.toggleSidenav();
    }
  }
}

