import {
  Component,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { products, services } from '../../content';
import { RevealDirective } from '../../reveal.directive';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    RouterLink,
    RevealDirective
  ],

  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent
  implements AfterViewInit, OnDestroy {

  // =====================================
  // PRODUCT AND SERVICE DATA
  // =====================================

  products = products;

  services = services;

  experience = 18;


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

  private counterObserver?: IntersectionObserver;

  private timer?: ReturnType<typeof setInterval>;


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
  // ANIMATED EXPERIENCE COUNTER
  // =====================================

  ngAfterViewInit(): void {

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return;
    }

    const element =
      document.querySelector('.stat-figure');

    if (!element) {
      return;
    }

    this.counterObserver =
      new IntersectionObserver(entries => {

        if (!entries.some(
          entry => entry.isIntersecting
        )) {
          return;
        }

        this.counterObserver?.disconnect();

        const start = performance.now();

        const tick = () => {

          const elapsed =
            performance.now() - start;

          const t = Math.min(
            elapsed / 1100,
            1
          );

          this.experience = Math.round(
            18 * (1 - Math.pow(1 - t, 3))
          );

          if (t >= 1 && this.timer) {

            clearInterval(this.timer);

            this.timer = undefined;

          }

        };

        this.experience = 0;

        this.timer = setInterval(
          tick,
          35
        );

      }, {
        threshold: 0.4
      });

    this.counterObserver.observe(element);

  }


  // =====================================
  // CLEAN UP ON PAGE DESTROY
  // =====================================

  ngOnDestroy(): void {

    this.counterObserver?.disconnect();

    if (this.timer) {
      clearInterval(this.timer);
    }

  }

}