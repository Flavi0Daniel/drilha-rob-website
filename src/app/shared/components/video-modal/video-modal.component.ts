import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { VideoItem } from '../../../core/models/video.model';

const ALLOWED_HOSTS = ['www.facebook.com', 'facebook.com', 'web.facebook.com', 'www.tiktok.com', 'tiktok.com'];

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
})
export class VideoModalComponent implements OnChanges, OnDestroy {
  @Input() video: VideoItem | null = null;
  @Output() closed = new EventEmitter<void>();
  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  safeUrl: SafeResourceUrl | null = null;
  private opener: HTMLElement | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.safeUrl = this.video ? this.buildSafeUrl(this.video.embedUrl) : null;
    if (this.video) {
      this.opener = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';
      setTimeout(() => this.closeBtn?.nativeElement.focus());
    } else {
      this.release();
    }
  }

  ngOnDestroy(): void {
    this.release();
  }

  @HostListener('document:keydown.escape')
  close(): void {
    if (this.video) {
      this.closed.emit();
    }
  }

  get platformName(): string {
    return this.video?.plataforma === 'tiktok' ? 'TikTok' : 'Facebook';
  }

  /** Só aceita iframes HTTPS de domínios conhecidos (Facebook e TikTok). */
  private buildSafeUrl(url: string): SafeResourceUrl | null {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || !ALLOWED_HOSTS.includes(parsed.hostname)) {
        return null;
      }
      return this.sanitizer.bypassSecurityTrustResourceUrl(parsed.href);
    } catch {
      return null;
    }
  }

  private release(): void {
    document.body.style.overflow = '';
    this.opener?.focus?.();
    this.opener = null;
  }
}
