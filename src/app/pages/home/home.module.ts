import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: HomeComponent, data: { seo: 'home' } }])],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
