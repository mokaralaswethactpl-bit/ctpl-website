
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corporate-governance',
  standalone: true,
  imports: [RouterLink],

  template: `
    <!-- CORPORATE GOVERNANCE PAGE -->

    
<!-- CORPORATE INFORMATION HEADER -->
<section class="page-hero ci-heading">

  <div class="container">

    <div class="eyebrow eyebrow-light">
      CTPL / INVESTORS
    </div>

    <h1>Corporate Governance</h1>

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


    <section class="cg-section">

      <div class="container">

        <div class="cg-card">

          <div class="cg-layout">

            <!-- LEFT SIDE: FOUR TABS -->
            <nav
              class="cg-tabs"
              aria-label="Corporate Governance"
            >

              @for (tab of tabs; track tab; let i = $index) {

                <button
                  type="button"
                  [class.active]="activeTab() === i"
                  [attr.aria-pressed]="activeTab() === i"
                  (click)="activeTab.set(i)"
                >
                  {{ tab }}
                </button>

              }

            </nav>

            <!-- RIGHT SIDE: INTENTIONALLY EMPTY -->
            <div class="cg-content"></div>

          </div>

        </div>

      </div>

    </section>
  `
})
export class CorporateGovernanceComponent {

  activeTab = signal(0);

  tabs = [
    'Investor Information',
    'Share holding pattern',
    'Compliance Report on CG',
    'Investor Grievances Report'
  ];

}
