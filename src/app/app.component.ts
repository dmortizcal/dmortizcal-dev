import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OverlayContainer} from '@angular/cdk/overlay';
import {SidenavService} from "./services/sidenav.service";
import {TranslateService} from "@ngx-translate/core";
import {LanguageDetectorService} from "./services/language-detector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  viewIconMenu = true;
  languages = [{}]
  @HostBinding('class') className = '';

  constructor(private dialog: MatDialog,
              private sidenavService: SidenavService,
              private translate: TranslateService,
              private overlay: OverlayContainer,
              private browserLanguageDetector: LanguageDetectorService) {
    this.languages = [
      {code: 'en', name: 'english'},
      {code: 'es', name: 'spanish'},
    ];
  }

  changeTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      this.className = 'darkMode';
      this.overlay.getContainerElement().classList.remove('darkMode');
    } else {
      localStorage.setItem('theme', 'light');
      this.className = '';
      this.overlay.getContainerElement().classList.add('darkMode');
    }
  }

  isDarkTheme() {
    const isDark = localStorage.getItem('theme');
    return isDark === 'dark';
  }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      this.className = '';
      this.overlay.getContainerElement().classList.remove('darkMode');
    } else {
      this.className = 'darkMode';
      this.overlay.getContainerElement().classList.add('darkMode');
    }

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
