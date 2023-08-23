import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('angular-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
    this.year = new Date().getFullYear();
  }

  ngOnInit() {

  }

}
