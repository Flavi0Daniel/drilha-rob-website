import { Pipe, PipeTransform } from '@angular/core';

import { LocalizedText } from '../../core/models/video.model';
import { LanguageService } from '../../core/services/language.service';

/** Devolve o texto no idioma activo; usa português se faltar a tradução. */
@Pipe({ name: 'localized', pure: false })
export class LocalizedPipe implements PipeTransform {
  constructor(private language: LanguageService) {}

  transform(value?: Partial<LocalizedText> | null): string {
    if (!value) {
      return '';
    }
    return value[this.language.current] ?? value.pt ?? '';
  }
}
