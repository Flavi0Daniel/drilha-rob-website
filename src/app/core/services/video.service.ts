import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VideoItem } from '../models/video.model';

@Injectable({ providedIn: 'root' })
export class VideoService {
  // Ficheiro editável no servidor, sem necessidade de novo build.
  private jsonUrl = 'assets/data/videos.json';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<VideoItem[]> {
    return this.http.get<VideoItem[]>(this.jsonUrl);
  }
}
