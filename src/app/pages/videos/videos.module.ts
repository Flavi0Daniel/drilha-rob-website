import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [VideosComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: VideosComponent, data: { seo: 'videos' } }])],
})
export class VideosModule {}
