
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-centre',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './customer-centre.html',
  styleUrl: './customer-centre.scss'
})
export class CustomerCentreComponent {

  private fb = inject(FormBuilder);
  private sanitizer = inject(DomSanitizer);

  formNotice = '';

  readonly mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=' +
      encodeURIComponent(
        '3-13-142 Gokul Nagar Mallapur Hyderabad Telangana 500076 India'
      ) +
      '&z=11&output=embed'
    );

  contactForm = this.fb.nonNullable.group({

    name: ['', Validators.required],

    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    enquiryType: ['', Validators.required],

    message: ['', Validators.required]

  });

  showError(field: string): boolean {

    const control = this.contactForm.get(field);

    return !!control &&
      control.invalid &&
      (control.touched || control.dirty);

  }

  submitContact(): void {

    this.formNotice = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formNotice =
      'This contact form is not yet connected to a submission service. Your message has not been sent.';

  }

}
