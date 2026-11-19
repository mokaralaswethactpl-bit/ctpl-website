
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ShareRow = {
  cells: string[];
  section?: boolean;
  total?: boolean;
};

@Component({
  selector: 'app-shareholdings',
  standalone: true,
  imports: [RouterLink],

  template: `
    <!-- PAGE HEADER -->
    <section class="page-hero ci-heading">
      <div class="container">
        <div class="eyebrow eyebrow-light">
          CTPL / INVESTORS
        </div>

        <h1>Shareholdings</h1>

        <div class="page-hero-actions">
          <a routerLink="/" class="btn btn-outline-light">
            ← Back to homepage
          </a>
        </div>
      </div>
    </section>

    <!-- SHAREHOLDINGS STRUCTURE -->
    <section class="sh-section">
      <div class="sh-container">

        <h2 class="sh-page-title">
          Shareholdings Structure
        </h2>

        <div class="sh-table-scroll">
          <table class="sh-table sh-question-table">
            <thead>
              <tr>
                <th>SR. NO.</th>
                <th>PARTICULAR</th>
                <th>YES/NO</th>
                <th>PROMOTER AND PROMOTER GROUP</th>
                <th>PUBLIC SHAREHOLDER</th>
                <th>NON PROMOTER - NON PUBLIC</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Whether the Listed Entity has issued any partly paid up shares?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Whether the Listed Entity has issued any Convertible Securities?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Whether the Listed Entity has issued any Warrants?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Whether Listed Entity has granted any ESOPs, which are outstanding?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Whether the Listed Entity has any shares against which depository receipts are issued?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Whether the Listed Entity has any shares in locked-in?</td>
                <td>Yes</td><td>No</td><td>Yes</td><td>No</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Whether any shares held by promoters are encumbered under "Pledged"?</td>
                <td>No</td><td>No</td>
                <td rowspan="3" colspan="2"></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Whether any shares held by promoters are encumbered under "Non-Disposal Undertaking"?</td>
                <td>No</td><td>No</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Whether any shares held by promoters are encumbered, other than by way of Pledge or NDU, if any?</td>
                <td>No</td><td>No</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Whether company has equity shares with differential voting rights?</td>
                <td>No</td><td>No</td><td>No</td><td>No</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Whether the listed entity has any significant beneficial owner?</td>
                <td>No</td><td colspan="3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- TABLE I: PART 1 -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-wide-table">
            <thead>
              <tr>
                <th colspan="11" class="sh-table-heading">
                  TABLE I - SUMMARY STATEMENT HOLDING OF SPECIFIED
                  SECURITIES (PART 1)
                </th>
              </tr>

              <tr>
                <th rowspan="2">CATEGORY<br>(I)</th>
                <th rowspan="2">CATEGORY OF SHAREHOLDER<br>(II)</th>
                <th rowspan="2">NO.OF SHAREHOLDERS<br>(III)</th>
                <th rowspan="2">NO.OF FULLY PAID UP EQUITY SHARES HELD<br>(IV)</th>
                <th rowspan="2">NO.OF PARTLY PAID-UP EQUITY SHARES HELD<br>(V)</th>
                <th rowspan="2">NO. OF SHARES UNDERLYING DEPOSITORY RECEIPTS<br>(VI)</th>
                <th rowspan="2">TOTAL NO.SHARES HELD (VII) = (IV)+(V)+(VI)</th>
                <th rowspan="2">
                  SHAREHOLDING % (AS PER SCRR, 1957)
                  (VIII) AS A % OF (A+B+C2)
                </th>
                <th colspan="3">
                  NUMBER OF VOTING RIGHTS HELD IN EACH
                  CLASS OF SECURITIES (IX)
                </th>
              </tr>

              <tr>
                <th>CLASS X</th>
                <th>TOTAL</th>
                <th>TOTAL % OF (A+B+C)</th>
              </tr>
            </thead>

            <tbody>
              @for (row of summaryPartOne; track $index) {
                <tr [class.sh-total-row]="row.total">
                  @for (cell of row.cells; track $index) {
                    <td>{{ cell }}</td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- TABLE I: PART 2 -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-wide-table">
            <thead>
              <tr>
                <th colspan="9" class="sh-table-heading">
                  TABLE I - SUMMARY STATEMENT HOLDING OF SPECIFIED
                  SECURITIES (PART 2)
                </th>
              </tr>

              <tr>
                <th rowspan="2">CATEGORY<br>(I)</th>
                <th rowspan="2">CATEGORY OF SHAREHOLDER<br>(II)</th>
                <th rowspan="2">
                  NO. OF SHARES UNDERLYING OUTSTANDING
                  CONVERTIBLE SECURITIES (X)
                </th>
                <th rowspan="2">NO. OF WARRANTS (XI)</th>
                <th rowspan="2">
                  NO. OF SHARES UNDERLYING OUTSTANDING
                  CONVERTIBLE SECURITIES AND NO. OF
                  WARRANTS (XI) (A)
                </th>
                <th rowspan="2">
                  SHAREHOLDING % ASSUMING FULL CONVERSION
                  OF CONVERTIBLE SECURITIES (XI)=(VII)+(X)
                  AS % OF (A+B+C2)
                </th>
                <th colspan="2">
                  NUMBER OF SHARES PLEDGED OR OTHERWISE
                  ENCUMBERED (XIII)
                </th>
                <th rowspan="2">
                  NUMBER OF EQUITY SHARES HELD IN
                  DEMATERIALIZED FORM (XIV)
                </th>
              </tr>

              <tr>
                <th>NO. (A)</th>
                <th>AS A % OF TOTAL SHARES HELD (B)</th>
              </tr>
            </thead>

            <tbody>
              @for (row of summaryPartTwo; track $index) {
                <tr [class.sh-total-row]="row.total">
                  @for (cell of row.cells; track $index) {
                    <td>{{ cell }}</td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- TABLE II -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-category-table">
            <thead>
              <tr>
                <th colspan="6" class="sh-table-heading">
                  TABLE II - STATEMENT SHOWING SHAREHOLDING PATTERN
                  OF THE PROMOTER AND PROMOTER GROUP
                </th>
              </tr>

              <tr>
                @for (header of categoryHeaders; track header) {
                  <th>{{ header }}</th>
                }
              </tr>
            </thead>

            <tbody>
              @for (row of promoterRows; track $index) {
                @if (row.section) {
                  <tr class="sh-section-row">
                    <td colspan="6">{{ row.cells[0] }}</td>
                  </tr>
                } @else {
                  <tr [class.sh-total-row]="row.total">
                    @for (cell of row.cells; track $index) {
                      <td>{{ cell }}</td>
                    }
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>

        <!-- TABLE III -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-category-table">
            <thead>
              <tr>
                <th colspan="6" class="sh-table-heading">
                  TABLE III - STATEMENT SHOWING SHAREHOLDING
                  PATTERN OF THE PUBLIC SHAREHOLDERS
                </th>
              </tr>

              <tr>
                @for (header of categoryHeaders; track header) {
                  <th>{{ header }}</th>
                }
              </tr>
            </thead>

            <tbody>
              @for (row of publicRows; track $index) {
                @if (row.section) {
                  <tr class="sh-section-row">
                    <td colspan="6">{{ row.cells[0] }}</td>
                  </tr>
                } @else {
                  <tr [class.sh-total-row]="row.total">
                    @for (cell of row.cells; track $index) {
                      <td>{{ cell }}</td>
                    }
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>

        <!-- TABLE IV -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-category-table">
            <thead>
              <tr>
                <th colspan="6" class="sh-table-heading">
                  TABLE IV - STATEMENT SHOWING SHAREHOLDING
                  PATTERN OF THE NON PROMOTER- NON PUBLIC
                  SHAREHOLDER
                </th>
              </tr>

              <tr>
                @for (header of categoryHeaders; track header) {
                  <th>{{ header }}</th>
                }
              </tr>
            </thead>

            <tbody>
              @for (row of nonPublicRows; track $index) {
                <tr [class.sh-total-row]="row.total">
                  @for (cell of row.cells; track $index) {
                    <td>{{ cell }}</td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- TABLE V -->
        <div class="sh-table-scroll sh-table-spacing">
          <table class="sh-table sh-foreign-table">
            <thead>
              <tr>
                <th colspan="3" class="sh-table-heading">
                  TABLE V - STATEMENT SHOWING FOREIGN OWNERSHIP LIMITS
                </th>
              </tr>

              <tr>
                <th>PARTICULAR</th>
                <th>APPROVED LIMITS (%)</th>
                <th>LIMITS UTILIZED (%)</th>
              </tr>
            </thead>

            <tbody>
              @for (row of foreignOwnership; track $index) {
                <tr>
                  <td>{{ row[0] }}</td>
                  <td>{{ row[1] }}</td>
                  <td>{{ row[2] }}</td>
                </tr>
              }

              <tr>
                <td colspan="3" class="sh-notes">
                  <strong>Notes :</strong>

                  <div>
                    1) "Approved Limits(%)" means the limit approved
                    by Board of Directors / shareholders of the
                    Listed entiry. In case the listed entity has
                    no Board approved limit, provide details of
                    sectoral/ statutory cap prescribed by
                    Government / Regulatory.
                  </div>

                  <strong>Notes :</strong>

                  <div>
                    2) Details of Foreign ownership includes foreign
                    ownership / investments as specified in Rule 2(s)
                    of the Foreign Exchange Management (Non-debt
                    Instruments) Rules, 2019, made under the Foreign
                    Exchange Management Act, 1999.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  `
})
export class ShareholdingsComponent {

  summaryPartOne: ShareRow[] = [
    {
      cells: [
        '(A)', 'Promoter & Promoter Group', '2',
        '11029950', '', '', '11029950', '71.63',
        '11029950.00', '11029950.00', '71.63'
      ]
    },
    {
      cells: [
        '(B)', 'Public', '502',
        '4369050', '0', '0', '4369050', '28.37',
        '4369050', '4369050', '28.37'
      ]
    },
    {
      cells: [
        '(C)', 'Non Promoter- Non Public',
        '', '', '', '', '', '', '', '', ''
      ]
    },
    {
      cells: [
        '(C1)', 'Shares underlying DRs',
        '', '', '', '', '', '', '', '', ''
      ]
    },
    {
      cells: [
        '(C2)', 'Shares held by Employee Trusts',
        '', '', '', '', '', '', '', '', ''
      ]
    },
    {
      total: true,
      cells: [
        '', 'Total', '504',
        '15399000', '0', '0', '15399000', '100',
        '15399000.00', '15399000.00', '100.00'
      ]
    }
  ];

  summaryPartTwo: ShareRow[] = [
    {
      cells: [
        '(A)', 'Promoter & Promoter Group', '',
        '', '', '71.63', '', '', '11029950'
      ]
    },
    {
      cells: [
        '(B)', 'Public', '0',
        '0', '0', '28.37', '', '', '4369050'
      ]
    },
    {
      cells: [
        '(C)', 'Non Promoter- Non Public',
        '', '', '', '', '', '', ''
      ]
    },
    {
      cells: [
        '(C1)', 'Shares underlying DRs',
        '', '', '', '', '', '', ''
      ]
    },
    {
      cells: [
        '(C2)', 'Shares held by Employee Trusts',
        '', '', '', '', '', '', ''
      ]
    },
    {
      total: true,
      cells: [
        '', 'Total', '0',
        '0', '0', '100.00', '', '', '15399000'
      ]
    }
  ];

  categoryHeaders = [
    'CATEGORY & NAME OF THE SHAREHOLDERS',
    'NO.OF SHAREHOLDERS',
    'NO.OF FULLY PAID UP EQUITY SHARES HELD',
    'TOTAL NO.SHARES HELD',
    'SHAREHOLDING %',
    'SHARES IN DEMATERIALIZED FORM'
  ];

  promoterRows: ShareRow[] = [
    {
      section: true,
      cells: ['A1) Indian']
    },
    {
      cells: [
        'Individuals/Hindu undivided Family',
        '2', '11,029,950', '11,029,950', '71.63', '11,029,950'
      ]
    },
    {
      cells: [
        'Central Government/ State Government(s)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Financial Institutions/ Banks',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Any Other (Specify)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      total: true,
      cells: [
        'Sub-Total (A)(1)',
        '2', '11,029,950', '11,029,950', '71.63', '11,029,950'
      ]
    },
    {
      section: true,
      cells: ['A2) Foreign']
    },
    {
      cells: [
        'Individuals (Non-Resident Indians/ Foreign Individuals)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Government', '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Institutions', '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Foreign Portfolio Investor',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Any Other (specify)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      total: true,
      cells: [
        'Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)',
        '2', '11,029,950', '11,029,950', '71.63', '11,029,950'
      ]
    }
  ];

  publicRows: ShareRow[] = [
    {
      section: true,
      cells: ['B1) Institutions (Domestic)']
    },
    {
      cells: ['Mutual Funds', '0', '0', '0', '0.00', '0']
    },
    {
      cells: [
        'Banks / Financial Institutions',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Insurance Companies', '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Alternate Investment Funds',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Any Other (specify)', '1', '7,000', '7,000', '0.05', '7,000'
      ]
    },
    {
      section: true,
      cells: ['B2) Institutions (Foreign)']
    },
    {
      cells: [
        'Foreign Portfolio Investors (Category I)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Foreign Portfolio Investors (Category II)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Foreign Venture Capital Investors',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      section: true,
      cells: ['B3) Non-Institutions']
    },
    {
      cells: [
        'Individual share capital up to Rs. 2 Lacs',
        '426', '1,615,000', '1,615,000', '10.49', '1,615,000'
      ]
    },
    {
      cells: [
        'Individual share capital in excess of Rs. 2 Lacs',
        '27', '2,133,000', '2,133,000', '13.85', '2,133,000'
      ]
    },
    {
      cells: [
        'Bodies Corporate', '14', '428,000', '428,000', '2.78', '428,000'
      ]
    },
    {
      cells: [
        'Non Resident Indians (NRIs)',
        '9', '66,000', '66,000', '0.43', '66,000'
      ]
    },
    {
      cells: [
        'Any Other (specify)', '20', '120,000', '120,000', '0.78', '120,000'
      ]
    },
    {
      total: true,
      cells: [
        'Total Public Shareholding (B) = (B)(1)+(B)(2)+(B)(3)',
        '502', '4,369,050', '4,369,050', '28.37', '4,369,050'
      ]
    }
  ];

  nonPublicRows: ShareRow[] = [
    {
      cells: [
        'Custodian/DR Holder', '0', '0', '0', '0.00', '0'
      ]
    },
    {
      cells: [
        'Employee Benefit Trust', '0', '0', '0', '0.00', '0'
      ]
    },
    {
      total: true,
      cells: [
        'Total Non-Promoter- Non Public Shareholding (C)',
        '0', '0', '0', '0.00', '0'
      ]
    },
    {
      total: true,
      cells: [
        'Total ( A+B+C )',
        '504', '15,399,000', '15,399,000', '100.00', '15,399,000'
      ]
    }
  ];

  foreignOwnership = [
    ['As on shareholding date', '100.00', '0.43'],
    ['As on the end of previous 1st quarter', '100.00', '0.72'],
    ['As on the end of previous 2nd quarter', '100.00', '1.20'],
    ['As on the end of previous 3rd quarter', '100.00', '1.07'],
    ['As on the end of previous 4th quarter', '100.00', '0.74']
  ];
}
