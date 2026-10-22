import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent, data: { seo: 'contact' } }]),
  ],
})
export class ContactModule {}
