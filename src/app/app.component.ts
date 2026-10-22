import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

import { AnimationService } from './core/services/animation.service';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private title: Title,
    private meta: Meta,
    private language: LanguageService,
    private animation: AnimationService,
  ) {
    this.language.init();

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.updateSeo();
      // as imagens e os separadores alteram a altura da página depois da navegação
      setTimeout(() => this.animation.refresh(), 400);
    });
    this.language.lang$.subscribe(() => this.updateSeo());
  }

  skipToMain(event: Event): void {
    event.preventDefault();
    const main = document.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  }

  private updateSeo(): void {
    let current = this.route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    const key = current.snapshot.data['seo'] as string | undefined;
    if (!key) {
      return;
    }
    const titleKey = `seo.${key}.title`;
    const descKey = `seo.${key}.description`;
    this.translate.get([titleKey, descKey]).subscribe((t) => {
      this.title.setTitle(t[titleKey]);
      this.meta.updateTag({ name: 'description', content: t[descKey] });
      this.meta.updateTag({ property: 'og:title', content: t[titleKey] });
      this.meta.updateTag({ property: 'og:description', content: t[descKey] });
    });
  }
}
