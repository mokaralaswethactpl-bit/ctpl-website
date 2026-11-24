
import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  activeMenu = '';
  mobileMenu = false;

  menus = [
    {
      name: 'About',
      path: 'about',
      children: [
        { name: 'Our Story', path: 'about/our-story' },
        { name: 'Vision, Mission & Values', path: 'about/vision' },
        { name: 'Strength & Infrastructure', path: 'about/strength' },
        { name: 'Market Presence', path: 'about/market-presence' }
      ]
    },
    {
      name: 'Products',
      path: 'products',
      children: [
        { name: 'AIS-140 / IS 16833', path: 'products/ais' },
        { name: 'Embedded e-SIM', path: 'products/e-sim' },
        { name: 'GSLD', path: 'products/gsld' },
        { name: 'LIMITS', path: 'products/limits' },
        { name: 'Motoreye', path: 'products/motoreye' },
        { name: 'Trano RFID', path: 'products/rfid' }
      ]
    },
    {
      name: 'Services',
      path: 'services',
      children: [
        { name: 'TRANO', path: 'services/trano' },
        { name: 'TRANOPRO', path: 'services/trano-pro' },
        { name: 'CTPL ERP', path: 'services/erp' },
        { name: 'MIS - CONVERTZ', path: 'services/mis' },
        { name: 'Unified Management System', path: 'services/ums' },
        { name: 'CTPL Dialer', path: 'services/dialer' },
        { name: 'VLTD State Integrations', path: 'services/vltd' },
        { name: 'SLD Services', path: 'services/sld' }
      ]
    },
    {
      name: 'Investors',
      path: 'investors',
      children: [
        { name: 'Corporate Governance', path: 'investors/corporate-governance' },
        { name: 'Corporate Information', path: 'investors/corporate-information' },
        { name: 'IPO', path: 'investors/ipo' },
        { name: 'Results', path: 'investors/results' },
        { name: 'Rights Issue', path: 'investors/rights-issue' },
        { name: 'Shareholdings', path: 'investors/shareholdings' }
      ]
    },
    {
      name: 'Dealer Centre',
      path: 'dealer-centre',
      children: [
        { name: 'Approvals', path: 'dealer-centre/approvals' },
        { name: 'Dealer Enquiry', path: 'dealer-centre/dealer-enquiry' },
        { name: 'e-SIM Validity', path: 'dealer-centre/esim-validity' },
        { name: 'RFC', path: 'dealer-centre/rfc' },
        { name: 'SMS Commands', path: 'dealer-centre/sms-commands' },
        { name: 'VLT Data Validity', path: 'dealer-centre/vlt-data-validity' }
      ]
    },
    {
      name: 'Customer Centre',
      path: 'customer-centre',
      children: []
    },
    {
      name: 'Careers',
      path: 'careers',
      children: []
    },
    {
      name: 'Blogs',
      path: 'blogs',
      children: []
    }
  ];

  openMenu(path: string): void {
    this.activeMenu = path;
  }

  closeMenu(): void {
    this.activeMenu = '';
  }

  toggleMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  closeNavigation(): void {
    this.activeMenu = '';
    this.mobileMenu = false;
  }
}
