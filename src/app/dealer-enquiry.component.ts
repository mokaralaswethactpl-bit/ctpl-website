
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dealer-enquiry',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],

  template: `

    <!-- =====================================
         FULL WIDTH DEALER ENQUIRY BANNER
         ===================================== -->

    <section class="de-image-hero">

      <h1>Dealer Enquiry</h1>

    </section>


    <!-- =====================================
         BECOME AN AUTHORIZED DEALER
         ===================================== -->

    <section class="de-form-section">

      <div class="de-form-card">

        <h2>Become an Authorized Dealer</h2>

        <p>
          Join our growing network of authorized dealers
          and partners. We work closely with our channel
          partners to deliver certified technology
          solutions, product support, and long-term
          collaboration opportunities.
        </p>

        <p class="de-form-instruction">
          <strong>
            Submit your details to explore dealership
            requirements, onboarding process, and
            partnership benefits
          </strong>
        </p>

        <form
          [formGroup]="dealerForm"
          (ngSubmit)="submitEnquiry()"
          novalidate
        >

          <div class="de-form-grid">

            <!-- NAME -->
            <div class="de-field">

              <label for="de-name">
                Name <span>*</span>
              </label>

              <input
                id="de-name"
                type="text"
                formControlName="name"
                placeholder="Name"
                autocomplete="name"
              />

              @if (showError('name')) {
                <small>Please enter your name.</small>
              }

            </div>

            <!-- PHONE NUMBER -->
            <div class="de-field">

              <label for="de-phone">
                Phone Number <span>*</span>
              </label>

              <input
                id="de-phone"
                type="tel"
                formControlName="phone"
                autocomplete="tel"
              />

              @if (showError('phone')) {
                <small>Enter a valid 10-digit phone number.</small>
              }

            </div>

            <!-- EMAIL -->
            <div class="de-field">

              <label for="de-email">
                Email <span>*</span>
              </label>

              <input
                id="de-email"
                type="email"
                formControlName="email"
                placeholder="Email Address"
                autocomplete="email"
              />

              @if (showError('email')) {
                <small>Please enter a valid email address.</small>
              }

            </div>

            <!-- ENQUIRY TYPE -->
            <div class="de-field">

              <label for="de-type">
                Enquiry Type <span>*</span>
              </label>

              <select
                id="de-type"
                formControlName="enquiryType"
              >

                <option value="">- Select -</option>

                <option value="Dealership Enquiry">
                  Dealership Enquiry
                </option>

                <option value="Channel Partnership">
                  Channel Partnership
                </option>

                <option value="Product Information">
                  Product Information
                </option>

                <option value="Other Enquiry">
                  Other Enquiry
                </option>

              </select>

              @if (showError('enquiryType')) {
                <small>Please select an enquiry type.</small>
              }

            </div>

            <!-- MESSAGE -->
            <div class="de-field de-full-width">

              <label for="de-message">
                Message <span>*</span>
              </label>

              <textarea
                id="de-message"
                formControlName="message"
                placeholder="Message"
                rows="4"
              ></textarea>

              @if (showError('message')) {
                <small>Please enter your message.</small>
              }

            </div>

          </div>

          <button
            type="submit"
            class="de-submit"
          >
            Submit
          </button>

          @if (formNotice) {
            <p
              class="de-form-notice"
              role="status"
            >
              {{ formNotice }}
            </p>
          }

        </form>

      </div>

    </section>


    <!-- =====================================
         READY TO PARTNER WITH US
         ===================================== -->

    <section class="de-partner-section">

      <div
        class="de-network-background"
        aria-hidden="true"
      >

        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="xMidYMid slice"
        >

          <g
            fill="none"
            stroke="#66818c"
            stroke-width="0.8"
            opacity="0.48"
          >

            <path d="M40 40 L150 20 L120 95 L70 130 L40 40"/>
            <path d="M40 40 L120 95 L150 20"/>
            <path d="M330 20 L450 55 L650 30 L720 125"/>
            <path d="M790 15 L900 65 L840 160 L790 15"/>
            <path d="M900 65 L850 220 L940 285 L840 160"/>
            <path d="M45 210 L130 250 L85 310 L45 210"/>
            <path d="M1030 20 L1150 60"/>
            <path d="M1140 190 L1130 270"/>

          </g>

          <g fill="#66818c" opacity="0.65">

            <circle cx="40" cy="40" r="2"/>
            <circle cx="150" cy="20" r="2"/>
            <circle cx="120" cy="95" r="2"/>
            <circle cx="70" cy="130" r="2"/>
            <circle cx="330" cy="20" r="2"/>
            <circle cx="450" cy="55" r="2"/>
            <circle cx="650" cy="30" r="2"/>
            <circle cx="790" cy="15" r="2"/>
            <circle cx="900" cy="65" r="2"/>
            <circle cx="850" cy="220" r="2"/>
            <circle cx="940" cy="285" r="2"/>
            <circle cx="45" cy="210" r="2"/>
            <circle cx="130" cy="250" r="2"/>
            <circle cx="1030" cy="20" r="2"/>
            <circle cx="1150" cy="60" r="2"/>

          </g>

        </svg>

      </div>

      <div class="container de-partner-content">

        <h2>Ready to Partner With Us?</h2>

        <p>
          We are looking to collaborate with reliable
          dealers and channel partners to expand our
          reach and deliver certified technology
          solutions. Connect with our team to understand
          dealership criteria, onboarding requirements,
          and partnership support.
        </p>

        <a
          routerLink="/page/customer-centre"
          class="de-contact-button"
        >
          GET IN TOUCH
        </a>

      </div>

    </section>

  `
})
export class DealerEnquiryComponent {

  private fb = inject(FormBuilder);

  formNotice = '';

  dealerForm = this.fb.nonNullable.group({

    name: [
      '',
      Validators.required
    ],

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

    enquiryType: [
      '',
      Validators.required
    ],

    message: [
      '',
      Validators.required
    ]

  });

  showError(field: string): boolean {
    const control = this.dealerForm.get(field);

    return !!control &&
      control.invalid &&
      (control.touched || control.dirty);
  }

  submitEnquiry(): void {

    this.formNotice = '';

    if (this.dealerForm.invalid) {
      this.dealerForm.markAllAsTouched();
      return;
    }

    this.formNotice =
      'The enquiry form is not yet connected to a submission service. Your enquiry has not been sent.';

  }

}
