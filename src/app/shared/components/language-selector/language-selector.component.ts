import { Component, Input } from '@angular/core';

import { Lang } from '../../../core/models/video.model';
import { LANGS, LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-selector',
  template: `
    <div class="flex items-center gap-1" role="group" [attr.aria-label]="'nav.language' | translate">
      <button
        *ngFor="let l of langs"
        type="button"
        (click)="select(l)"
        [attr.aria-pressed]="language.current === l"
        [attr.lang]="l"
        class="px-2 py-1 text-sm font-semibold transition-colors"
        [ngClass]="buttonClass(l)"
      >
        {{ l.toUpperCase() }}
      </button>
    </div>
  `,
})
export class LanguageSelectorComponent {
  /** "light" = sobre fundo escuro; "dark" = sobre fundo claro */
  @Input() tone: 'light' | 'dark' = 'dark';
  readonly langs = LANGS;

  constructor(public language: LanguageService) {}

  select(lang: Lang): void {
    this.language.use(lang);
  }

  buttonClass(lang: Lang): string {
    const active = this.language.current === lang;
    if (this.tone === 'light') {
      return active ? 'bg-white text-ink' : 'text-white/80 hover:text-white';
    }
    return active ? 'bg-ink text-white' : 'text-steel hover:text-ink';
  }
}
