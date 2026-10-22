import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { MEDIA } from '../../../core/config/media';
import { SERVICES } from '../../../core/config/services.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly media = MEDIA;
  readonly services = SERVICES;

  menuOpen = false;
  servicesOpen = false;
  private hasHero = false;
  private pastHero = false;
  private sub?: Subscription;

  /** Transparente apenas enquanto o hero está visível no topo da página. */
  get transparent(): boolean {
    return this.hasHero && !this.pastHero && !this.menuOpen && !this.servicesOpen;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.closeAll();
      // o conteúdo da página lazy ainda pode estar a renderizar
      setTimeout(() => this.measure(), 0);
      setTimeout(() => this.measure(), 400);
    });
    this.measure();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  measure(): void {
    const hero = document.querySelector<HTMLElement>('[data-hero]');
    this.hasHero = !!hero;
    this.pastHero = hero ? hero.getBoundingClientRect().bottom <= 88 : true;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.servicesOpen = false;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeAll(): void {
    this.menuOpen = false;
    this.servicesOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAll();
  }
}
