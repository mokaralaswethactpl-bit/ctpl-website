
import { Component, HostListener } from '@angular/core';

import { SearchComponent } from './pages/search/search';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';


@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SearchComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  // ==========================================
  // NAVIGATION PROPERTIES
  // ==========================================

  activeMenu: string = '';

  mobileMenu: boolean = false;

  currentYear = new Date().getFullYear();


  // ==========================================
  // MAIN NAVIGATION MENU
  // ==========================================

  menus = [

    // ABOUT

    {
      name: 'About',
      path: '/page/about',

      children: [
        {
          name: 'Our Story',
          path: '/page/our-story'
        },
        {
          name: 'Vision, Mission & Values',
          path: '/page/vision-mission-values'
        },
        {
          name: 'Strength & Infrastructure',
          path: '/page/strength-infrastructure'
        },
        {
          name: 'Market Presence',
          path: '/page/market-presence'
        }
      ]
    },


    // PRODUCTS

    {
      name: 'Products',
      path: '/products',

      children: [
        {
          name: 'AIS-140 / IS 16833',
          path: '/products/ais'
        },
        {
          name: 'Embedded e-SIM',
          path: '/products/e-sim'
        },
        {
          name: 'GSLD',
          path: '/products/gsld'
        },
        {
          name: 'LIMITS',
          path: '/products/limits'
        },
        {
          name: 'Motoreye',
          path: '/products/motoreye'
        },
        {
          name: 'TRANOGO-4G',
          path: '/products/tranogo-4g'
        }
      ]
    },


    // SERVICES

    {
      name: 'Services',
      path: '/services',

      children: [
        {
          name: 'TRANO',
          path: '/services/trano'
        },
        {
          name: 'TRANOPRO',
          path: '/services/trano-pro'
        },
        {
          name: 'CTPL ERP',
          path: '/services/erp'
        },
        {
          name: 'MIS - CONVERTZ',
          path: '/services/mis'
        },
        {
          name: 'Unified Management System',
          path: '/services/ums'
        },
        {
          name: 'CTPL Dialer',
          path: '/services/dialer'
        },
        {
          name: 'VLTD State Integrations',
          path: '/services/vltd'
        },
        {
          name: 'SLD Services',
          path: '/services/sld'
        }
      ]
    },


    // INVESTORS

    {
      name: 'Investors',
      path: '/page/investors',

      children: [
        {
          name: 'Corporate Governance',
          path: '/page/corporate-governance'
        },
        {
          name: 'Corporate Information',
          path: '/page/corporate-information'
        },
        {
          name: 'IPO',
          path: '/page/ipo'
        },
        {
          name: 'Results',
          path: '/page/results-reports'
        },
        {
          name: 'Rights Issue',
          path: '/page/rights-issue'
        },
        {
          name: 'Shareholdings',
          path: '/page/shareholdings'
        }
      ]
    },


    // DEALER CENTRE

    {
      name: 'Dealer Centre',
      path: '/page/dealer-centre',

      children: [
        {
          name: 'Approvals',
          path: '/page/approvals-sop'
        },
        {
          name: 'Dealer Enquiry',
          path: '/page/dealer-enquiry'
        },
        {
          name: 'e-SIM Validity',
          path: '/page/esim-validity'
        },
        {
          name: 'RFC',
          path: '/page/rfc'
        },
        {
          name: 'SMS Commands',
          path: '/page/tranopro-sms-commands'
        },
        {
          name: 'VLT Data Validity',
          path: '/page/vltd-data-validity'
        }
      ]
    },


    // CUSTOMER CENTRE

    {
      name: 'Customer Centre',
      path: '/page/customer-centre',
      children: []
    },


    // CAREERS

    {
      name: 'Careers',
      path: '/careers',
      children: []
    },


    // BLOGS

    {
      name: 'Blogs',
      path: '/blogs',
      children: []
    }

  ];


  // ==========================================
  // TOGGLE MEGA DROPDOWN MENU
  // ==========================================

  toggleMenu(path: string, event: MouseEvent): void {

    event.preventDefault();

    event.stopPropagation();

    if (this.activeMenu === path) {

      this.closeMenu();

    } else {

      this.openMenu(path);

    }

  }


  // ==========================================
  // OPEN MEGA MENU
  // ==========================================

  openMenu(path: string): void {

    this.activeMenu = path;

  }


  // ==========================================
  // CLOSE MEGA MENU
  // ==========================================

  closeMenu(): void {

    this.activeMenu = '';

  }


  // ==========================================
  // TOGGLE MOBILE MENU
  // ==========================================

  toggleMobileMenu(): void {

    this.mobileMenu = !this.mobileMenu;

    if (!this.mobileMenu) {

      this.closeMenu();

    }

  }


  // ==========================================
  // CLOSE COMPLETE NAVIGATION
  // ==========================================

  closeNavigation(): void {

    this.activeMenu = '';

    this.mobileMenu = false;

  }


  // ==========================================
  // CLOSE MENU WHEN CLICKING OUTSIDE HEADER
  // ==========================================

  @HostListener('document:click', ['$event'])

  onOutsideClick(event: MouseEvent): void {

    const target = event.target;

    if (
      target instanceof Element &&
      !target.closest('.main-header')
    ) {

      this.closeNavigation();

    }

  }


  // ==========================================
  // CLOSE MENU ON ESCAPE KEY
  // ==========================================

  @HostListener('document:keydown.escape')

  onEscape(): void {

    this.closeNavigation();

  }


  // ==========================================
  // FOOTER - BACK TO TOP FUNCTIONALITY
  // ==========================================

  scrollToTop(): void {

    if (typeof window !== 'undefined') {

      window.scrollTo({

        top: 0,

        behavior: 'smooth'

      });

    }

  }

}
