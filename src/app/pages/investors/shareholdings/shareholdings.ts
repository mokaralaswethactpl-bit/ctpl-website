
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
  templateUrl: './shareholdings.html',
  styleUrl: './shareholdings.css'
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
