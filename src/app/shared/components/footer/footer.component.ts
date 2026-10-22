import { Component } from '@angular/core';

import { MEDIA } from '../../../core/config/media';
import { CONTACT, SERVICES } from '../../../core/config/services.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly media = MEDIA;
  readonly services = SERVICES;
  readonly contact = CONTACT;
}
