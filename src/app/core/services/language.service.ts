import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { Lang } from '../models/video.model';

export const LANGS: Lang[] = ['pt', 'en', 'fr'];
const STORAGE_KEY = 'drilha.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private subject = new BehaviorSubject<Lang>('pt');
  readonly lang$ = this.subject.asObservable();

  constructor(private translate: TranslateService) {}

  get current(): Lang {
    return this.subject.value;
  }

  init(): void {
    this.translate.addLangs(LANGS);
    this.translate.setDefaultLang('pt');
    let lang: Lang = 'pt';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGS.includes(saved as Lang)) {
        lang = saved as Lang;
      }
    } catch {
      // armazenamento indisponível: mantém o português
    }
    this.use(lang);
  }

  use(lang: Lang): void {
    this.translate.use(lang);
    this.subject.next(lang);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignorar
    }
  }
}
