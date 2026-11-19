
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type RightsIssueItem = {
  title: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-rights-issue',
  standalone: true,
  imports: [RouterLink],

  template: `

    <!-- =====================================
         RIGHTS ISSUE PAGE HEADER
         ===================================== -->

    <section class="page-hero ci-heading">

      <div class="container">

        <div class="eyebrow eyebrow-light">
          CTPL / INVESTORS
        </div>

        <h1>Rights Issue</h1>

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
         RIGHTS ISSUE CONTENT
         ===================================== -->

    <section class="ctpl-ipo-section ctpl-rights-section">

      <!-- DECORATIVE SHAPES -->

      <span class="ipo-shape ipo-diamond-one"></span>
      <span class="ipo-shape ipo-diamond-two"></span>
      <span class="ipo-shape ipo-triangle-one"></span>
      <span class="ipo-shape ipo-triangle-two"></span>
      <span class="ipo-shape ipo-dot-one"></span>
      <span class="ipo-shape ipo-dot-two"></span>

      <div class="container ipo-content">

        <h2>Rights Issue</h2>

        <div class="ipo-grid">

          @for (item of rightsItems; track item.title) {

            <article class="ipo-card">

              <h3>{{ item.title }}</h3>

              <p>{{ item.description }}</p>

              <!-- VIEW PDF BUTTON -->

              <a
                class="ipo-download ipo-download-btn"
                [href]="item.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW
              </a>

            </article>

          }

        </div>

      </div>

    </section>

  `
})
export class RightsIssueComponent {

  // =====================================
  // RIGHTS ISSUE PDF DOCUMENTS
  // =====================================

  rightsItems: RightsIssueItem[] = [

    {
      title: 'DRAFT LETTER OF OFFER',

      description:
        'Containe Technologies Ltd - Rights Issued Draft Letter of Offer',

      url: '/assets/pdfs/rights-issue/draft-letter-of-offer.pdf'
    },

    {
      title: 'BOARD MEETING OUTCOME',

      description:
        'Containe Technologies Ltd - Rights Issued Board Meeting Outcome',

      url: '/assets/pdfs/rights-issue/board-meeting-outcome.pdf'
    },

    {
      title: 'LETTER OF OFFER',

      description:
        'Containe Technologies Ltd - Letter of Offer',

      url: '/assets/pdfs/rights-issue/letter-of-offer.pdf'
    },

    {
      title: 'RE',

      description:
        'Containe Technologies Ltd - RE',

      url: '/assets/pdfs/rights-issue/re.pdf'
    },

    {
      title: 'CAF',

      description:
        'Containe Technologies Ltd - CAF',

      url: '/assets/pdfs/rights-issue/caf.pdf'
    }

  ];

}
