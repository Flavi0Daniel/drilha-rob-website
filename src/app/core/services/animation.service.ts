import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  readonly gsap = gsap;
  readonly reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  refresh(): void {
    ScrollTrigger.refresh();
  }
}
