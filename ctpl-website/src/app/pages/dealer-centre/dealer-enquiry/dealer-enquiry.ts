
import { Component, inject } from '@angular/core';


import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dealer-enquiry',
  standalone: true,

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './dealer-enquiry.html',
  styleUrl: './dealer-enquiry.scss'
})
export class DealerEnquiryComponent {

  private fb = inject(FormBuilder);

  formNotice = '';

  /* =====================================
     DEALER ENQUIRY FORM
  ===================================== */

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

  /* =====================================
     FIELD VALIDATION
  ===================================== */

  showError(field: string): boolean {

    const control = this.dealerForm.get(field);

    return !!control &&
      control.invalid &&
      (control.touched || control.dirty);

  }

  /* =====================================
     SUBMIT DEALER ENQUIRY
  ===================================== */

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
