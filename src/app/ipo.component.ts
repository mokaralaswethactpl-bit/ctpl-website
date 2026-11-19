
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type IPOItem = {
  title: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-ipo',
  standalone: true,
  imports: [RouterLink],

  template: `

    <!-- =====================================
         IPO PAGE HEADER
         ===================================== -->

    <section class="page-hero ci-heading">

      <div class="container">

        <div class="eyebrow eyebrow-light">
          CTPL / INVESTORS
        </div>

        <h1>Initial Public Offer (IPO)</h1>

        <div class="page-hero-actions">

          <a
            routerLink="/"
            class="btn btn-outline-light"
          >
            ← Back to homepage
          </a>

        </div>

      </div>

    </section>


    <!-- =====================================
         IPO DOCUMENTS SECTION
         ===================================== -->

    <section class="ctpl-ipo-section">

      <!-- BACKGROUND SHAPES -->

      <span class="ipo-shape ipo-diamond-one"></span>
      <span class="ipo-shape ipo-diamond-two"></span>
      <span class="ipo-shape ipo-triangle-one"></span>
      <span class="ipo-shape ipo-triangle-two"></span>
      <span class="ipo-shape ipo-dot-one"></span>
      <span class="ipo-shape ipo-dot-two"></span>

      <div class="container ipo-content">

        <h2>Supplier Opportunities</h2>

        <div class="ipo-grid">

          @for (item of ipoItems; track item.title) {

            <article class="ipo-card">

              <h3>{{ item.title }}</h3>

              <p>{{ item.description }}</p>

              <!-- DIRECT PDF DOWNLOAD -->

              <a
                class="ipo-download ipo-download-btn"
                [href]="item.url"
                download
              >
                Download
              </a>

            </article>

          }

        </div>

      </div>

    </section>

  `
})
export class IPOComponent {

  // =====================================
  // IPO PDF DOCUMENTS
  // =====================================

  ipoItems: IPOItem[] = [

    {
      title: 'DRAFT PROSPECTUS',

      description:
        'Preliminary prospectus issued for regulatory and investor review.',

      url: '/assets/pdfs/ipo/draft-prospectus.pdf'
    },

    {
      title: 'FINAL PROSPECTUS',

      description:
        'Final prospectus containing complete and approved issue details.',

      url: '/assets/pdfs/ipo/final-prospectus.pdf'
    },

    {
      title: 'PRE-ISSUE ADVERTISEMENT',

      description:
        'Official pre-issue advertisements released as per regulatory requirements.',

      url: '/assets/pdfs/ipo/pre-issue-advertisement.pdf'
    },

    {
      title: 'ONLINE APPLICATION FORM',

      description:
        'Download official IPO application and revision forms.',

      url: '/assets/pdfs/ipo/online-application-form.pdf'
    },

    {
      title: 'REVISION APPLICATION FORM',

      description:
        'Form for submitting corrections or revisions to IPO applications.',

      url: '/assets/pdfs/ipo/revision-application-form.pdf'
    },

    {
      title: 'BLANK APPLICATION FORM',

      description:
        'Standard blank form for submitting a fresh IPO application.',

      url: '/assets/pdfs/ipo/blank-application-form.pdf'
    },

    {
      title: 'ABRIDGED PROSPECTUS',

      description:
        'Summarised prospectus highlighting key issue and company details.',

      url: '/assets/pdfs/ipo/abridged-prospectus.pdf'
    },

    {
      title: 'GENERAL INFORMATION DOCUMENT',

      description:
        'Essential general information related to the public issue.',

      url: '/assets/pdfs/ipo/general-information-document.pdf'
    }

  ];

}
