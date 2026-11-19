
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { pages } from './content';
import { findProductDetails } from './product-details';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective],

  template: `

    @if (page(); as p) {

      <!-- PAGE HEADER -->

      
<section
  class="page-hero"
  [class.ctpl-about-hero]="p.group === 'About'"
  [class.ctpl-services-hero]="p.group === 'Services'"
  [class.ctpl-rfc-image-hero]="isRfcPage()"
>
        <div class="container">

          <div class="eyebrow eyebrow-light">
            CTPL / {{ p.group }}
          </div>

          <h1>{{ p.title }}</h1>

          @if (
            p.group !== 'Services' &&
            p.group !== 'Products' &&
            !isRfcPage()
          ) {
            <p>{{ p.summary }}</p>
          }

          <div class="page-hero-actions">

            <a
              class="btn btn-outline-light"
              routerLink="/"
            >
              ← Back to homepage
            </a>

          </div>

        </div>

      </section>

      @if (isRfcPage()) {

        <!-- RFC / SERVICE CENTRES -->

        <section class="section ctpl-rfc-overview">

          <div class="container">

            <div class="ctpl-detail-grid">

              <div appReveal class="ctpl-detail-content">

                <h3 class="ctpl-service-heading">
                  Authorized Service & Support Centers
                </h3>

                <p>
                  CTPL's authorised service and support
                  network provides assistance with product
                  installations, routine maintenance and
                  technical issues.
                </p>

                <p>
                  These centres follow defined service
                  procedures intended to deliver reliable,
                  consistent and timely assistance.
                </p>

                <p>
                  Customers and business partners can seek
                  help from an authorised centre for
                  product servicing, diagnostic checks,
                  device configuration and general
                  technical enquiries.
                </p>

              </div>

              <!-- RFC IMAGE -->

              <div appReveal class="ctpl-image-panel">

                @if (p.image) {

                  <img
                    [src]="p.image"
                    [alt]="p.title"
                    loading="lazy"
                  />

                } @else {

                  <div class="ctpl-image-placeholder">

                    <span class="placeholder-icon">▧</span>

                    <h3>RFC / Service Centres</h3>

                    <p>CTPL image will be added here</p>

                  </div>

                }

              </div>

            </div>

          </div>

        </section>

        <!-- SERVICE & TECHNICAL ASSISTANCE -->

        <section class="section section-soft ctpl-rfc-support">

          <div class="container">

            <div class="eyebrow">
              OUR SUPPORT
            </div>

            <h2>Service & Technical Assistance</h2>

            <div class="ctpl-support-grid">

              @for (item of supportItems; track item.title) {

                <div appReveal class="ctpl-support-card">

                  <div class="ctpl-support-icon">
                    {{ item.icon }}
                  </div>

                  <h3>{{ item.title }}</h3>

                  <p>{{ item.description }}</p>

                </div>

              }

            </div>

          </div>

        </section>

        <!-- TECHNICAL SUPPORT CONTACT -->

        <section class="ctpl-service-contact">

          <div
            class="ctpl-network-background"
            aria-hidden="true"
          >

            <svg
              viewBox="0 0 1200 320"
              preserveAspectRatio="xMidYMid slice"
            >

              <g
                class="network-lines"
                fill="none"
                stroke="#66818c"
                stroke-width="0.8"
                opacity="0.45"
              >

                <path d="M40 40 L150 20 L120 95 L70 130 L40 40"/>
                <path d="M40 40 L120 95 L150 20"/>
                <path d="M330 20 L450 55 L650 30 L720 125"/>
                <path d="M790 15 L900 65 L840 160 L790 15"/>
                <path d="M900 65 L850 220 L940 285 L840 160"/>
                <path d="M45 210 L130 250 L85 310 L45 210"/>
                <path d="M1030 20 L1150 60"/>
                <path d="M1140 190 L1130 270"/>

              </g>

              <g fill="#66818c" opacity="0.65">

                <circle cx="40" cy="40" r="2"/>
                <circle cx="150" cy="20" r="2"/>
                <circle cx="120" cy="95" r="2"/>
                <circle cx="70" cy="130" r="2"/>
                <circle cx="330" cy="20" r="2"/>
                <circle cx="450" cy="55" r="2"/>
                <circle cx="650" cy="30" r="2"/>
                <circle cx="790" cy="15" r="2"/>
                <circle cx="900" cy="65" r="2"/>
                <circle cx="850" cy="220" r="2"/>
                <circle cx="940" cy="285" r="2"/>
                <circle cx="45" cy="210" r="2"/>
                <circle cx="130" cy="250" r="2"/>
                <circle cx="1030" cy="20" r="2"/>
                <circle cx="1150" cy="60" r="2"/>

              </g>

            </svg>

          </div>

          <div class="container ctpl-service-contact-content">

            <h2>
              Need Service or Technical Support?
            </h2>

            <p>
              Our authorized service and support centers
              are available to assist with installation,
              maintenance, diagnostics, and technical
              queries. Connect with us to locate the
              nearest service center or to receive
              guidance on service procedures.
            </p>

            <a
              routerLink="/page/customer-centre"
              class="ctpl-get-in-touch"
            >
              GET IN TOUCH
            </a>

          </div>

        </section>

      } @else {

        <!-- ABOUT, PRODUCTS AND SERVICES DETAILS -->

        <section
          class="section ctpl-main-detail"
          [class.ctpl-about-detail]="p.group === 'About'"
          [class.ctpl-product-detail]="p.group === 'Products'"
          [class.ctpl-service-detail]="p.group === 'Services'"
        >

          <div class="container ctpl-detail-grid">

            <!-- TEXT CONTENT -->

            <div appReveal class="ctpl-detail-content">

              <div class="eyebrow">
                {{ p.group }}
              </div>

              <h2>{{ p.title }}</h2>

              <!-- SHORT DESCRIPTION -->

              <p class="lead">
                {{ p.summary }}
              </p>

              <!-- PRODUCT PARAGRAPHS -->

              @if (expandedProduct(); as details) {

                <div class="ctpl-inline-product-description">

                  @for (
                    paragraph of details.overview;
                    track paragraph
                  ) {

                    <p>{{ paragraph }}</p>

                  }

                </div>

              }

              <!-- OTHER PAGE INFORMATION -->

              @if (p.bullets?.length) {

                <div class="ctpl-information-block">

                  <h3>Features & Information</h3>

                  <ul class="detail-bullets">

                    @for (bullet of p.bullets; track bullet) {

                      <li>{{ bullet }}</li>

                    }

                  </ul>

                </div>

              }

            </div>

            <!-- PAGE IMAGE -->

            <aside
              appReveal
              class="ctpl-image-panel"
              [class.ctpl-about-image]="p.group === 'About'"
              [class.ctpl-product-image]="p.group === 'Products'"
              [class.ctpl-service-image]="p.group === 'Services'"
            >

              @if (p.image) {

                <img
                  [src]="p.image"
                  [alt]="p.title"
                  loading="lazy"
                />

              } @else {

                <div class="ctpl-image-placeholder">

                  <span class="placeholder-icon">▧</span>

                  <h3>{{ p.title }}</h3>

                  <p>
                    CTPL image will be added here
                  </p>

                </div>

              }

            </aside>

          </div>

        </section>

      }

      <!-- =====================================
           ADDITIONAL PRODUCT INFORMATION
           ===================================== -->

      @if (expandedProduct(); as details) {

        <!-- KEY FEATURES -->

        <section class="section section-soft">

          <div class="container">

            <div class="eyebrow">
              TECHNOLOGY & CAPABILITIES
            </div>

            <h2>Key Features & Benefits</h2>

            <div class="ctpl-product-features">

              @for (
                feature of details.features;
                track feature
              ) {

                <div  class="ctpl-product-feature">

                  <span class="ctpl-feature-check">
                    ✓
                  </span>

                  <span>{{ feature }}</span>

                </div>

              }

            </div>

          </div>

        </section>

        <!-- =====================================
             APPLICATIONS - NEW 3D FLIP CARDS
             ===================================== -->

        <section class="section">

          <div class="container">

            <div class="eyebrow">
              APPLICATIONS
            </div>

            <h2>
              Where This Technology Is Used
            </h2>

            <div class="ctpl-application-grid">

              @for (
                application of details.applications;
                track application
              ) {

                <button
                  appReveal
                  type="button"
                  class="ctpl-application-flip"
                  [class.is-flipped]="isApplicationFlipped(application)"
                  [attr.aria-expanded]="isApplicationFlipped(application)"
                  (click)="toggleApplication(application)"
                >

                  <span class="ctpl-flip-inner">

                    <!-- FRONT SIDE -->

                    <span
                      class="ctpl-flip-front"
                      [attr.aria-hidden]="isApplicationFlipped(application)"
                    >

                      <strong>
                        {{ application }}
                      </strong>

                      <span class="ctpl-flip-hint">
                        Click to know more
                      </span>

                    </span>

                    <!-- BACK SIDE -->

                    <span
                      class="ctpl-flip-back"
                      [attr.aria-hidden]="!isApplicationFlipped(application)"
                    >

                      <strong>
                        {{ application }}
                      </strong>

                      <span class="ctpl-flip-description">
                        {{ getApplicationDescription(application) }}
                      </span>

                      <span class="ctpl-flip-hint">
                        Click to return
                      </span>

                    </span>

                  </span>

                </button>

              }

            </div>

            @if (details.note) {

              <p class="ctpl-product-verification">
                {{ details.note }}
              </p>

            }

          </div>

        </section>

        <!-- PRODUCT ENQUIRY -->

        <section class="ctpl-product-enquiry">

          <div class="container ctpl-product-enquiry-inner">

            <div>

              <h2>
                Looking for a CTPL Solution?
              </h2>

              <p>
                Contact our team to discuss product
                information, compatibility and
                technical requirements.
              </p>

            </div>

            <a
              routerLink="/page/customer-centre"
              class="btn btn-primary"
            >
              Contact CTPL →
            </a>

          </div>

        </section>

      }

    } @else {

      <!-- PAGE NOT FOUND -->

      <section class="section">

        <div class="container">

          <h1>Page not found</h1>

          <a routerLink="/">
            Return to homepage →
          </a>

        </div>

      </section>

    }

  `
})
export class DetailComponent {

  private route = inject(ActivatedRoute);

  private slug = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('slug') ?? '')
    ),
    { initialValue: '' }
  );

  page = computed(() =>
    pages.find(p => p.slug === this.slug())
  );

  // =====================================
  // PRODUCT DETAILS
  // =====================================

  expandedProduct = computed(() => {

    const p = this.page();

    if (!p || p.group !== 'Products') {
      return undefined;
    }

    return findProductDetails(p.title);

  });

  // =====================================
  // RFC / SERVICE CENTRES
  // =====================================

  isRfcPage = computed(() => {

    const p = this.page();

    return !!p && (
      p.title.toLowerCase().includes('rfc') ||
      p.slug.toLowerCase().includes('rfc-service')
    );

  });

  // =====================================
  // APPLICATION FLIP CARD FUNCTIONALITY
  // =====================================

  private flippedApplications = new Set<string>();

  private applicationKey(application: string): string {

    return this.slug() + '::' + application;

  }

  isApplicationFlipped(application: string): boolean {

    return this.flippedApplications.has(
      this.applicationKey(application)
    );

  }

  toggleApplication(application: string): void {

    const key = this.applicationKey(application);

    if (this.flippedApplications.has(key)) {

      this.flippedApplications.delete(key);

    } else {

      this.flippedApplications.add(key);

    }

  }

  // =====================================
  // APPLICATION CARD DESCRIPTIONS
  // =====================================

  private readonly applicationDescriptions:
    Record<string, string> = {

    'Commercial goods vehicles':
      'Supports speed management in trucks, goods carriers and commercial transport vehicles.',

    'Public transport vehicles':
      'Supports controlled vehicle speeds for safer passenger transportation.',

    'School and institutional transport':
      'Supports speed management for school buses and institutional transport vehicles.',

    'Compatible commercial vehicle fleets':
      'Supports speed limitation across compatible commercial fleet vehicles and transport operations.',

    'Transport operators requiring speed limitation':
      'Helps transport operators manage vehicle speed according to applicable requirements.'

  };

  getApplicationDescription(application: string): string {

    return this.applicationDescriptions[application]
      ?? 'Contact CTPL for application details and product compatibility information.';

  }

  // =====================================
  // SUPPORT CARDS
  // =====================================

  supportItems = [

    {
      icon: '⚙',
      title: 'Installation Assistance',
      description:
        'Support for product installation and device configuration.'
    },

    {
      icon: '◈',
      title: 'Maintenance Services',
      description:
        'Assistance with maintenance and servicing of CTPL devices.'
    },

    {
      icon: '◎',
      title: 'Product Diagnostics',
      description:
        'Technical checks and troubleshooting for supported products.'
    },

    {
      icon: '◇',
      title: 'Technical Support',
      description:
        'Guidance for customers and partners with technical enquiries.'
    }

  ];

}
