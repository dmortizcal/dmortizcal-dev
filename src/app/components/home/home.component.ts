import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  viewIconMenu = true;

  constructor() {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 800) {
      this.viewIconMenu = false;
    }
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
