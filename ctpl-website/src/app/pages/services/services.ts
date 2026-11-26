
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../content';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,

  imports: [
    RouterLink,
    RevealDirective
  ],

  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {

  // ======================================
  // ORIGINAL SERVICE DATA
  // ======================================

  services = services;


  // ======================================
  // SERVICE ICONS
  // ======================================

  serviceIcons = [
    '◎',
    '◇',
    '▤',
    '◈',
    '⌘',
    '◉',
    '⊕',
    '▣'
  ];


  // ======================================
  // SERVICE PAGE NAVIGATION
  // ======================================

  serviceRoutes: Record<string, string> = {

    'trano': '/services/trano',

    'tranopro': '/services/trano-pro',

    'trano-pro': '/services/trano-pro',

    'ctpl-erp': '/services/erp',

    'erp': '/services/erp',

    'mis-convertz': '/services/mis',

    'mis': '/services/mis',

    'unified-management-system': '/services/ums',

    'ums': '/services/ums',

    'ctpl-dialer': '/services/dialer',

    'dialer': '/services/dialer',

    'vltd': '/services/vltd',

    'vltd-state-integrations': '/services/vltd',

    'sld-services': '/services/sld',

    'sld': '/services/sld'

  };


  // ======================================
  // GET SERVICE ROUTE
  // ======================================

  getServiceRoute(slug: string): string {

    return this.serviceRoutes[slug]
      ?? '/page/' + slug;

  }

}
