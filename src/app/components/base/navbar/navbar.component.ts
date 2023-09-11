import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../../services/sidenav.service";
import {TranslateService} from '@ngx-translate/core';
import {BrowserLanguageDetectorService} from "../../../services/browser-language-detector.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  viewIconMenu = true;
  languages =[{}]

  constructor(
    private sidenavService: SidenavService,
    private translate: TranslateService,
    private browserLanguageDetector: BrowserLanguageDetectorService) {
    this.languages = [
      { code: 'en', name: 'english', flag: '' },
      { code: 'es', name: 'spanish', flag: '../../assets/images/flags/es.png' },
    ];
  }

  ngOnInit(): void {
    if (window.innerWidth >= 800) {
      this.viewIconMenu = false;
    }
    this.browserLanguageDetector.detectAndSetLanguage();
  }

  switchLanguage(language: string) {
    this.browserLanguageDetector.setLanguage(language)
  }

  clickMenu() {
    this.sidenavService.toggleSidenav();
  }
}
