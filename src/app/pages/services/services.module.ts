import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: ServicesComponent, data: { seo: 'services' } }])],
})
export class ServicesModule {}
