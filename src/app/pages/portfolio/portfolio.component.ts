import { Component, HostListener, OnDestroy } from '@angular/core';

import { MEDIA } from '../../core/config/media';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnDestroy {
  readonly media = MEDIA;
  readonly images = MEDIA.gallery;
  current: number | null = null;

  open(index: number): void {
    this.current = index;
    document.body.style.overflow = 'hidden';
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.current = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.arrowright')
  next(): void {
    if (this.current !== null) {
      this.current = (this.current + 1) % this.images.length;
    }
  }

  @HostListener('document:keydown.arrowleft')
  prev(): void {
    if (this.current !== null) {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
