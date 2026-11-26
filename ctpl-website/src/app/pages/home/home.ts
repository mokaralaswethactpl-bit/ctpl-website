
import {
  Component,
  AfterViewInit,
  OnDestroy,
  signal
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { products, services } from '../../content';
import { RevealDirective } from '../../reveal.directive';

import { ProductSlideshowComponent } from './product-slideshow/product-slideshow';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    ProductSlideshowComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  // =====================================
  // PRODUCT PAGE NAVIGATION
  // =====================================

  productRoutes: Record<string, string> = {
    'motoreye-efrt': '/products/motoreye',
    'limits-epi': '/products/limits',
    'geo-limits-gsld': '/products/gsld',
    'ais-140-is16833': '/products/ais',
    'embedded-esim': '/products/e-sim',
    'trano-rfid': '/products/rfid'
  };

  getProductRoute(slug: string): string {
    return this.productRoutes[slug] ?? '/page/' + slug;
  }

  // =====================================
  // SERVICE PAGE NAVIGATION
  // =====================================

  serviceRoutes: Record<string, string> = {
    'trano': '/services/trano',
    'tranopro': '/services/trano-pro',
    'ctpl-erp': '/services/erp',
    'mis-convertz': '/services/mis',
    'unified-management-system': '/services/ums',
    'ctpl-dialer': '/services/dialer',
    'vltd': '/services/vltd',
    'sld-services': '/services/sld',

    // Alternative slug names
    'trano-pro': '/services/trano-pro',
    'erp': '/services/erp',
    'mis': '/services/mis',
    'ums': '/services/ums',
    'dialer': '/services/dialer',
    'sld': '/services/sld'
  };

  getServiceRoute(slug: string): string {
    return this.serviceRoutes[slug] ?? '/page/' + slug;
  }

  // =====================================
  // PRODUCT AND SERVICE DATA
  // =====================================

  products = products;
  services = services;

  // =====================================
  // INTERACTIVE GRID BACKGROUND
  // =====================================

  gridCells = Array.from(
    { length: 600 },
    (_, i) => i
  );

  // =====================================
  // EXPERIENCE COUNTER
  // =====================================

  
experience = signal(1);


  private experienceObserver?: IntersectionObserver;
  private experienceTimer?: ReturnType<typeof setInterval>;
  private experienceAnimated = false;

  // =====================================
  // EXPLORE CTPL CARDS
  // =====================================

  pathways = [
    {
      no: '01',
      slug: 'corporate-information',
      name: 'Investor relations',
      desc:
        'Corporate information, governance, reports and disclosures.'
    },
    {
      no: '02',
      slug: 'dealer-enquiry',
      name: 'Dealer centre',
      desc:
        'Enquiries, VLTD validity, service centres and approvals.'
    },
    {
      no: '03',
      slug: 'customer-centre',
      name: 'Customer centre',
      desc:
        'Support resources and assistance for CTPL customers.'
    }
  ];

  // =====================================
  // START COUNTER: 1, 2, 3 ... 18
  // =====================================

  startExperienceCounter(): void {

    if (this.experienceAnimated) {
      return;
    }

    this.experienceAnimated = true;
    this.experience.update(value => value + 1);

    this.experienceTimer = setInterval(() => {

      if (this.experience() < 18) {

        this.experience.update(value => value + 1);

      } else {

        if (this.experienceTimer) {
          clearInterval(this.experienceTimer);
          this.experienceTimer = undefined;
        }

      }

    }, 90);

  }

  // =====================================
  // START ANIMATION WHEN USER SCROLLS
  // =====================================

  
ngAfterViewInit(): void {

  if (typeof window === 'undefined') {
    return;
  }

  
const experienceCard =
  document.querySelector('.experience-glass-card');


  if (!experienceCard) {
    return;
  }

  if (
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
  ) {
   this.experience.set(18);
    return;
  }

  if (!('IntersectionObserver' in window)) {
    this.experience.set(18);
  }

  this.experienceObserver = new IntersectionObserver(
    (entries) => {

      if (entries.some(entry => entry.isIntersecting)) {

        this.experienceObserver?.disconnect();

        this.startExperienceCounter();

      }

    },
    {
      threshold: 0.1
    }
  );

  this.experienceObserver.observe(experienceCard);
}


  // =====================================
  // CLEAN UP WHEN LEAVING PAGE
  // =====================================

  ngOnDestroy(): void {

    this.experienceObserver?.disconnect();

    if (this.experienceTimer) {

      clearInterval(this.experienceTimer);

      this.experienceTimer = undefined;

    }

  }

}
