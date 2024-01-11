import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageDetectorService {
  constructor(private translate: TranslateService) {
  }

  detectAndSetLanguage(): void {
    const userLang = localStorage.getItem('language');
    if (userLang === 'en') {
      this.translate.use('en');
    } else {
      this.translate.use('es');
    }
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
