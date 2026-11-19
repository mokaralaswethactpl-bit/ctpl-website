
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type ReportDocument = {
  year: string;
  label: string;
  url: string | null;
};

@Component({
  selector: 'app-results-reports',
  standalone: true,
  imports: [RouterLink],

  template: `

    <!-- PAGE HEADER -->
    
<!-- CORPORATE INFORMATION HEADER -->
<section class="page-hero ci-heading">

  <div class="container">

    <div class="eyebrow eyebrow-light">
      CTPL / INVESTORS
    </div>

    <h1>Results & Reports</h1>

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


    <!-- RESULTS & REPORTS -->
    <section class="rr-section">

      <div class="container">

        <div class="rr-card">

          <div class="rr-layout">

            <!-- LEFT NAVIGATION -->
            <nav
              class="rr-tabs"
              aria-label="Results and Reports"
            >

              @for (
                tab of tabs;
                track tab;
                let i = $index
              ) {

                <button
                  type="button"
                  [class.active]="activeTab() === i"
                  [attr.aria-pressed]="activeTab() === i"
                  (click)="selectTab(i)"
                >
                  {{ tab }}
                </button>

              }

            </nav>

            <!-- RIGHT SIDE CONTENT -->
            <div class="rr-content">

              <!-- ANNUAL REPORTS -->
              @if (activeTab() === 0) {

                <div class="rr-table-panel">

                  <table class="rr-table">

                    <thead>
                      <tr>
                        <th>YEAR</th>
                        <th>DOWNLOAD</th>
                      </tr>
                    </thead>

                    <tbody>

                      @for (
                        report of annualReports;
                        track report.year
                      ) {

                        <tr>

                          <td>{{ report.year }}</td>

                          <td>

                            @if (report.url) {

                              <a
                                class="rr-pdf-button"
                                [href]="report.url"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span class="rr-dot">●</span>
                                VIEW PDF
                              </a>

                            } @else {

                              <button
                                type="button"
                                class="rr-pdf-button"
                                disabled
                                title="Original PDF link not verified"
                              >
                                <span class="rr-dot">●</span>
                                VIEW PDF
                              </button>

                            }

                          </td>

                        </tr>

                      }

                    </tbody>

                  </table>

                </div>

              }

              
<!-- FINANCIAL RESULTS -->
@if (activeTab() === 1) {

  <div class="rr-table-panel">

    <table class="rr-table rr-financial-table">

      <thead>
        <tr>
          <th>YEAR</th>
          <th>6 MONTHS (FINANCIALS)</th>
          <th>FULL YEAR (FINANCIALS)</th>
        </tr>
      </thead>

      <tbody>

        @for (report of financialResults; track report.year) {

          <tr>

            <td>{{ report.year }}</td>

            <td>
              @if (report.sixMonthsUrl) {
                <a
                  class="rr-pdf-button"
                  [href]="report.sixMonthsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="rr-dot">●</span>
                  PDF
                </a>
              } @else {
                <button
                  type="button"
                  class="rr-pdf-button"
                  disabled
                  title="Original PDF URL not yet verified"
                >
                  <span class="rr-dot">●</span>
                  PDF
                </button>
              }
            </td>

            <td>
              @if (report.fullYearUrl) {
                <a
                  class="rr-pdf-button"
                  [href]="report.fullYearUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="rr-dot">●</span>
                  PDF
                </a>
              } @else {
                <button
                  type="button"
                  class="rr-pdf-button"
                  disabled
                  title="Original PDF URL not yet verified"
                >
                  <span class="rr-dot">●</span>
                  PDF
                </button>
              }
            </td>

          </tr>

        }

      </tbody>

    </table>

  </div>

}

              <!-- UN-CLAIMED DIVIDEND -->
              @if (activeTab() === 2) {
                <div class="rr-empty"></div>
              }

              <!-- SCRUTINIZER REPORT -->
              @if (activeTab() === 3) {

                <div class="rr-table-panel">

                  <table class="rr-table">

                    <thead>
                      <tr>
                        <th>YEAR</th>
                        <th>DOWNLOAD</th>
                      </tr>
                    </thead>

                    <tbody>

                      @for (
                        report of scrutinizerReports;
                        track report.year
                      ) {

                        <tr>

                          <td>{{ report.year }}</td>

                          <td>

                            @if (report.url) {

                              <a
                                class="rr-pdf-button"
                                [href]="report.url"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span class="rr-dot">●</span>
                                VIEW PDF
                              </a>

                            } @else {

                              <button
                                type="button"
                                class="rr-pdf-button"
                                disabled
                                title="Original PDF link not verified"
                              >
                                <span class="rr-dot">●</span>
                                VIEW PDF
                              </button>

                            }

                          </td>

                        </tr>

                      }

                    </tbody>

                  </table>

                </div>

              }

              <!-- NEWSPAPER PUBLICATION -->
              @if (activeTab() === 4) {
                <div class="rr-empty"></div>
              }

              <!-- ANNUAL RETURN -->
              @if (activeTab() === 5) {

                <div class="rr-table-panel">

                  <table class="rr-table">

                    <thead>
                      <tr>
                        <th>YEAR</th>
                        <th>ANNUAL RETURNS (DOWNLOAD)</th>
                      </tr>
                    </thead>

                    <tbody>

                      @for (
                        report of annualReturns;
                        track report.year
                      ) {

                        <tr>

                          <td>{{ report.year }}</td>

                          <td>

                            @if (report.url) {

                              <a
                                class="rr-pdf-button"
                                [href]="report.url"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span class="rr-dot">●</span>
                                MGT-7
                              </a>

                            } @else {

                              <button
                                type="button"
                                class="rr-pdf-button"
                                disabled
                                title="Original MGT-7 link not verified"
                              >
                                <span class="rr-dot">●</span>
                                MGT-7
                              </button>

                            }

                          </td>

                        </tr>

                      }

                    </tbody>

                  </table>

                </div>

              }

              <!-- VOTING RESULTS -->
              @if (activeTab() === 6) {
                <div class="rr-empty"></div>
              }

              <!-- PUBLIC NOTICE -->
              @if (activeTab() === 7) {
                <div class="rr-empty"></div>
              }

            </div>

          </div>

        </div>

      </div>

    </section>

  `
})
export class ResultsReportsComponent {

  activeTab = signal(0);

  selectTab(index: number): void {
    this.activeTab.set(index);
  }

  tabs: string[] = [
    'Annual Reports',
    'Financial Results',
    'Un-claimed Dividend',
    'Scrutinizer Report',
    'Newspaper Publication',
    'Annual Return',
    'Voting Results',
    'Public Notice'
  ];

  annualReports: ReportDocument[] = [
    {
      year: '2025 – 2026',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2024 – 2025',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'VIEW PDF',
      url: null
    }
  ];


financialResults = [
  {
    year: '2025 – 26',
    sixMonthsUrl: null as string | null,
    fullYearUrl: null as string | null
  },
  {
    year: '2024 – 25',
    sixMonthsUrl: null as string | null,
    fullYearUrl: null as string | null
  },
  {
    year: '2023 – 24',
    sixMonthsUrl: null as string | null,
    fullYearUrl: null as string | null
  },
  {
    year: '2022 – 23',
    sixMonthsUrl: null as string | null,
    fullYearUrl: null as string | null
  }
];

  scrutinizerReports: ReportDocument[] = [
    {
      year: '2024 – 2025',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'VIEW PDF',
      url: null
    }
  ];

  annualReturns: ReportDocument[] = [
    {
      year: '2024 – 2025',
      label: 'MGT-7',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'MGT-7',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'MGT-7',
      url: null
    }
  ];

}
