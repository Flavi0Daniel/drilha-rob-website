import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: PortfolioComponent, data: { seo: 'portfolio' } }])],
})
export class PortfolioModule {}
