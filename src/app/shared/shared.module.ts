import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  Wrench,
  X,
  LucideAngularModule,
} from 'lucide-angular';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { PageHeroComponent } from './components/page-hero/page-hero.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { RevealDirective } from './directives/reveal.directive';
import { LocalizedPipe } from './pipes/localized.pipe';

const ICONS = {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  Wrench,
  X,
};

const DECLARATIONS = [
  HeaderComponent,
  FooterComponent,
  LanguageSelectorComponent,
  PageHeroComponent,
  VideoModalComponent,
  RevealDirective,
  LocalizedPipe,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, RouterModule, TranslateModule, LucideAngularModule.pick(ICONS)],
  exports: [CommonModule, RouterModule, TranslateModule, LucideAngularModule, ...DECLARATIONS],
})
export class SharedModule {}
