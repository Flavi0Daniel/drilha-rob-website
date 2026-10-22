import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { MEDIA } from '../../core/config/media';
import { SERVICES } from '../../core/config/services.data';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly media = MEDIA;
  readonly services = SERVICES;
  readonly pillarIcons = ['wrench', 'clock', 'shield-check'];
  readonly spotlight = [SERVICES[1], SERVICES[3]];
  readonly explore = [
    { key: 'portfolio', link: '/portfolio', image: MEDIA.gallery[0] },
    { key: 'videos', link: '/videos', image: MEDIA.gallery[4] },
    { key: 'about', link: '/sobre-nos', image: MEDIA.gallery[6] },
  ];

  active = 0;
  playing = true;

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('heroText') heroText?: ElementRef<HTMLElement>;
  @ViewChild('partnersEl') partnersEl?: ElementRef<HTMLElement>;

  private timeline?: gsap.core.Timeline;

  constructor(private anim: AnimationService) {}

  async ngAfterViewInit(): Promise<void> {
    this.setupHero();
    await this.setupPartners();
  }

  ngOnDestroy(): void {
    this.timeline?.kill();
  }

  togglePlayback(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) {
      return;
    }
    if (video.paused) {
      video.play().then(() => (this.playing = true)).catch(() => (this.playing = false));
    } else {
      video.pause();
      this.playing = false;
    }
  }

  onTabKey(event: KeyboardEvent): void {
    const total = this.services.length;
    let next = this.active;
    switch (event.key) {
      case 'ArrowRight':
        next = (next + 1) % total;
        break;
      case 'ArrowLeft':
        next = (next - 1 + total) % total;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = total - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.active = next;
    setTimeout(() => document.getElementById('tab-' + this.services[next].key)?.focus());
  }

  private setupHero(): void {
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      if (this.anim.reduced) {
        video.pause();
        this.playing = false;
      } else {
        video.play().catch(() => (this.playing = false));
      }
    }
    if (this.anim.reduced || !this.heroText || !video) {
      return;
    }
    // Única animação orquestrada da página: o vídeo assenta e o texto entra em sequência.
    this.timeline = this.anim.gsap
      .timeline()
      .from(video, { scale: 1.08, duration: 2.4, ease: 'power2.out' }, 0)
      .from(
        this.heroText.nativeElement.children,
        { autoAlpha: 0, y: 36, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
        0.2,
      );
  }

  private async setupPartners(): Promise<void> {
    const el = this.partnersEl?.nativeElement as (HTMLElement & { initialize?: () => void }) | undefined;
    if (!el) {
      return;
    }
    const { register } = await import('swiper/element/bundle');
    register();
    Object.assign(el, {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      speed: 700,
      autoplay: this.anim.reduced ? false : { delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      },
    });
    el.initialize?.();
  }
}
