import { Component, Input } from '@angular/core';

/** Banner de topo das páginas interiores. O atributo data-hero é usado pelo cabeçalho transparente. */
@Component({
  selector: 'app-page-hero',
  template: `
    <section data-hero class="relative isolate flex min-h-[56vh] items-end overflow-hidden bg-ink text-white">
      <img
        [src]="image"
        alt=""
        class="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        fetchpriority="high"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/65"></div>
      <div class="container-x pb-14 pt-40">
        <nav [attr.aria-label]="'common.breadcrumb' | translate" class="mb-6 text-sm text-white/75">
          <a routerLink="/" class="hover:text-white">{{ 'common.home' | translate }}</a>
          <span class="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">{{ title }}</span>
        </nav>
        <h1 class="max-w-4xl font-display text-6xl font-semibold leading-[0.92] sm:text-8xl">{{ title }}</h1>
        <p *ngIf="subtitle" class="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{{ subtitle }}</p>
      </div>
    </section>
  `,
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
}
