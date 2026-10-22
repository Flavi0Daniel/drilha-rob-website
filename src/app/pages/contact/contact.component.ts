import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MEDIA } from '../../core/config/media';
import { CONTACT, SERVICES } from '../../core/config/services.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  readonly media = MEDIA;
  readonly services = SERVICES;
  readonly contact = CONTACT;

  sent = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    phone: ['', [Validators.maxLength(30)]],
    service: [''],
    message: ['', [Validators.required, Validators.maxLength(1500)]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    const service = this.route.snapshot.queryParamMap.get('servico');
    if (service && this.services.some((s) => s.key === service)) {
      this.form.patchValue({ service });
    }
  }

  invalid(control: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Sem servidor de email por enquanto: prepara a mensagem na aplicação de email do utilizador.
    const v = this.form.getRawValue();
    const serviceName = v.service ? this.translate.instant(`services.items.${v.service}.title`) : '-';
    const subject = encodeURIComponent(`Contacto pelo site - ${v.name}`);
    const body = encodeURIComponent(
      `Nome: ${v.name}\nEmail: ${v.email}\nTelefone: ${v.phone || '-'}\nServiço: ${serviceName}\n\n${v.message}`,
    );
    window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
    this.sent = true;
  }
}
