
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-investors',
  standalone: true,

  imports: [
    RouterLink,
    RevealDirective
  ],

  templateUrl: './investors.html',
  styleUrl: './investors.scss'
})
export class Investors {

  // ======================================
  // INVESTOR SECTION DATA
  // ======================================

  investorSections = [

    {
      title: 'Corporate Information',

      category: 'INVESTOR RELATIONS',

      description:
        'Explore company information and corporate disclosures.',

      icon: '▤',

      route: '/page/corporate-information'
    },

    {
      title: 'Corporate Governance',

      category: 'GOVERNANCE & COMPLIANCE',

      description:
        'Explore our corporate governance policies, practices and compliance.',

      icon: '◇',

      route: '/page/corporate-governance'
    },

    {
      title: 'IPO',

      category: 'PUBLIC OFFERING',

      description:
        'Initial Public Offering information and related documents.',

      icon: '↗',

      route: '/page/ipo'
    },

    {
      title: 'Results & Reports',

      category: 'FINANCIAL INFORMATION',

      description:
        'Explore financial results, annual reports and company performance.',

      icon: '▥',

      route: '/page/results-reports'
    },

    {
      title: 'Rights Issue',

      category: 'INVESTOR INFORMATION',

      description:
        'Rights issue information and related disclosures.',

      icon: '▣',

      route: '/page/rights-issue'
    },

    {
      title: 'Shareholdings',

      category: 'SHAREHOLDER INFORMATION',

      description:
        'Explore shareholding patterns and shareholder information.',

      icon: '◉',

      route: '/page/shareholdings'
    }

  ];

}
