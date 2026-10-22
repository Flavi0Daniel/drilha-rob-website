import { Component } from '@angular/core';

import { MEDIA } from '../../core/config/media';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly media = MEDIA;
  readonly blocks = [
    { key: 'mission', image: MEDIA.gallery[7] },
    { key: 'vision', image: MEDIA.gallery[0] },
  ];
}
