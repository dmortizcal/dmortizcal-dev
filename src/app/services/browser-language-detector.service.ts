import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserLanguageDetectorService {
  constructor(private translate: TranslateService) {
  }

  detectAndSetLanguage(): void {
    const userLang = localStorage.getItem('language');
    if (userLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
