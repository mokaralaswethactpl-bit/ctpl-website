
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

  template: `

    <!-- CUSTOMER CENTRE BANNER -->
    <section class="cc-hero">
      <h1>Customer Centre</h1>
    </section>

    <!-- OFFICE LOCATIONS -->
    <section class="cc-office-section">

      <div class="container cc-office-grid">

        <article class="cc-office-card">
          
<div class="cc-location-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 24 24"
    fill="#0097d5"
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
    <circle
      cx="12"
      cy="9"
      r="2.5"
      fill="#ffffff"
    />
  </svg>
</div>

          <h3>Corporate Office – Hyderabad</h3>
          <p>
            3-13-142 / 341P, 342, GOKUL NAGAR,
            MARRIGUDA, MALLAPUR, SECUNDERABAD,
            Hyderabad, Telangana, 500076.
          </p>
        </article>

        <article class="cc-office-card">
          
<div class="cc-location-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 24 24"
    fill="#0097d5"
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
    <circle
      cx="12"
      cy="9"
      r="2.5"
      fill="#ffffff"
    />
  </svg>
</div>

          <h3>Sales Office – Delhi</h3>
          <p>
            SAHDEV GALI, VISHWAS NAGAR,
            SHAHADRA, North East Delhi,
            Delhi, 110032.
          </p>
        </article>

        <article class="cc-office-card">
          
<div class="cc-location-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 24 24"
    fill="#0097d5"
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
    <circle
      cx="12"
      cy="9"
      r="2.5"
      fill="#ffffff"
    />
  </svg>
</div>

          <h3>Branch Office – Gurugram</h3>
          <p>
            GOVERDHAN KUNJ, BADSHAHPUR,
            Gurugram, Haryana, 122001.
          </p>
        </article>

      </div>

    </section>

    <!-- CONTACT DETAILS AND ENQUIRY FORM -->
    <section class="cc-contact-section">

      <div class="container cc-contact-grid">

        <!-- LEFT SIDE -->
        <div class="cc-contact-info">

          <div class="cc-eyebrow">
            Contact Us
          </div>

          <h2>Get In Touch With Us!</h2>

          <p class="cc-intro">
            Have questions or need assistance?
            Reach out to our team for prompt
            support and information.
          </p>

          <div class="cc-contact-item">

            <span class="cc-contact-icon">☎</span>

            <div>
              <h3>Call Us</h3>
              <a href="tel:+919100777440">
                +91-9100777440
              </a>
            </div>

          </div>

          <div class="cc-contact-item">

            <span class="cc-contact-icon">✉</span>

            <div>
              <h3>Email Us</h3>
              <p>
                General Inquiries:
                <a href="mailto:info@containe.in">
                  info&#64;containe.in
                </a>
              </p>
              <p>
                Sales Inquiries:
                <a href="mailto:info@containe.in">
                  info&#64;containe.in
                </a>
              </p>
            </div>

          </div>

        </div>

        <!-- RIGHT SIDE: FORM -->
        <form
          class="cc-form"
          [formGroup]="contactForm"
          (ngSubmit)="submitContact()"
          novalidate
        >

          <div class="cc-form-grid">

            <div class="cc-field">
              <label for="cc-name">
                Name <span>*</span>
              </label>

              <input
                id="cc-name"
                type="text"
                formControlName="name"
                placeholder="Name"
                autocomplete="name"
              />

              @if (showError('name')) {
                <small>Please enter your name.</small>
              }
            </div>

            <div class="cc-field">
              <label for="cc-phone">
                Phone Number <span>*</span>
              </label>

              <input
                id="cc-phone"
                type="tel"
                formControlName="phone"
                autocomplete="tel"
              />

              @if (showError('phone')) {
                <small>
                  Enter a valid 10-digit phone number.
                </small>
              }
            </div>

            <div class="cc-field">
              <label for="cc-email">
                Email <span>*</span>
              </label>

              <input
                id="cc-email"
                type="email"
                formControlName="email"
                placeholder="Email Address"
                autocomplete="email"
              />

              @if (showError('email')) {
                <small>
                  Please enter a valid email address.
                </small>
              }
            </div>

            <div class="cc-field">
              <label for="cc-type">
                Enquiry Type <span>*</span>
              </label>

              <select
                id="cc-type"
                formControlName="enquiryType"
              >
                <option value="">- Select -</option>
                <option value="General Enquiry">
                  General Enquiry
                </option>
                <option value="Product Enquiry">
                  Product Enquiry
                </option>
                <option value="Technical Support">
                  Technical Support
                </option>
                <option value="Sales Enquiry">
                  Sales Enquiry
                </option>
                <option value="Other">
                  Other
                </option>
              </select>

              @if (showError('enquiryType')) {
                <small>
                  Please select an enquiry type.
                </small>
              }
            </div>

            <div class="cc-field cc-field-full">
              <label for="cc-message">
                Message <span>*</span>
              </label>

              <textarea
                id="cc-message"
                rows="4"
                formControlName="message"
                placeholder="Message"
              ></textarea>

              @if (showError('message')) {
                <small>
                  Please enter your message.
                </small>
              }
            </div>

          </div>

          <button
            class="cc-submit"
            type="submit"
          >
            Submit
          </button>

          @if (formNotice) {
            <p class="cc-form-notice" role="status">
              {{ formNotice }}
            </p>
          }

        </form>

      </div>

    </section>

    <!-- GOOGLE MAP -->
    <section class="cc-map-section">

      <iframe
        title="CTPL Corporate Office - Hyderabad Map"
        [src]="mapUrl"
        width="100%"
        height="400"
        style="border:0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>

    </section>

  `
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
