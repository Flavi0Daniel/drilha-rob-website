import { Component } from '@angular/core';

import { MEDIA } from '../../core/config/media';
import { SERVICES } from '../../core/config/services.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly media = MEDIA;
  readonly services = SERVICES;
}
