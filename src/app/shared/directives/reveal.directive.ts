import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

import { AnimationService } from '../../core/services/animation.service';

/**
 * Animação de entrada ao rolar a página (GSAP + ScrollTrigger).
 *  - "wipe": a imagem é revelada de cima para baixo
 *  - "rise": o bloco sobe ligeiramente e aparece
 *  - "stagger": os filhos directos aparecem em sequência
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') mode: '' | 'wipe' | 'rise' | 'stagger' = 'rise';
  @Input() revealDelay = 0;

  private animation?: gsap.core.Animation;

  constructor(
    private el: ElementRef<HTMLElement>,
    private anim: AnimationService,
  ) {}

  ngAfterViewInit(): void {
    if (this.anim.reduced) {
      return;
    }
    const el = this.el.nativeElement;
    const g = this.anim.gsap;
    const scrollTrigger = { trigger: el, start: 'top 88%', once: true };
    const mode = this.mode || 'rise';

    if (mode === 'wipe') {
      this.animation = g.fromTo(
        el,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.1,
          ease: 'power3.out',
          delay: this.revealDelay,
          scrollTrigger,
        },
      );
    } else if (mode === 'stagger') {
      this.animation = g.from(el.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power2.out',
        scrollTrigger,
      });
    } else {
      this.animation = g.from(el, {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        delay: this.revealDelay,
        scrollTrigger,
      });
    }
  }

  ngOnDestroy(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.animation as any)?.scrollTrigger?.kill();
    this.animation?.kill();
  }
}
