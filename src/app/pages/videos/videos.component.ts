import { Component, OnInit } from '@angular/core';

import { MEDIA } from '../../core/config/media';
import { VideoItem } from '../../core/models/video.model';
import { VideoService } from '../../core/services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  readonly media = MEDIA;
  videos: VideoItem[] = [];
  state: 'loading' | 'ready' | 'error' = 'loading';
  selected: VideoItem | null = null;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe({
      next: (videos) => {
        this.videos = videos;
        this.state = 'ready';
      },
      error: () => (this.state = 'error'),
    });
  }

  platformName(video: VideoItem): string {
    return video.plataforma === 'tiktok' ? 'TikTok' : 'Facebook';
  }
}
