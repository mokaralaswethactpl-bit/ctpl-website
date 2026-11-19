
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products, services } from './content';
import { RevealDirective } from './reveal.directive';

@Component({
  standalone: true,
  imports: [RouterLink, RevealDirective],
  template: `

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-photo"></div>
      <div class="hero-scrim"></div>

      <div class="container hero-inner">
        <div class="hero-copy">

          <div class="eyebrow hero-eyebrow">
            CONNECTED MOBILITY · ROAD SAFETY
          </div>

          <h1>
            Technology that moves
            <em>transport forward.</em>
          </h1>

          <p class="hero-description">
            Vehicle Tracking Device AIS-140 compliant SOS system is a
            vital tool for enhancing the safety and security of women
            and girl children across India. Integrated into public and
            private vehicles, the system features an easily accessible
            emergency panic button that, when activated, instantly
            transmits real-time location data to designated State
            Command and Control Centers and emergency response
            authorities. This rapid alert mechanism ensures timely
            intervention during distress situations—such as harassment,
            abduction, or accidents—providing vulnerable passengers
            with a reliable lifeline. By leveraging government-mandated
            telematics standards, CTPL’s technology empowers women
            and girls with greater mobility, confidence, and protection
            in everyday travel.
          </p>

          <div class="button-row">
            <a class="btn btn-primary" routerLink="/page/ais-140-is16833">
              Explore solutions <span>↗</span>
            </a>

            <a class="btn btn-ghost" routerLink="/page/our-story">
              Discover our story ↗
            </a>
          </div>

        </div>

        <div class="hero-label">
          CTPL / CONTAINE TECHNOLOGIES LIMITED
        </div>
      </div>
    </section>


    <!-- STAT STRIP -->
    <section class="stat-strip home-tech-bg">
      <div class="container stat-inner">

        <div class="stat-figure" appReveal>
          <strong>{{experience}}</strong>
          <span>years of<br>experience</span>
        </div>

        <p appReveal>
          Designing and manufacturing solutions for
          <strong>vehicle road safety and security</strong>,
          aligned with automotive industry standards.
        </p>

        <a class="text-link" routerLink="/page/our-story">
          About CTPL ↗
        </a>

      </div>
    </section>


    <!-- PRODUCT PORTFOLIO -->
    <section class="section section-soft product-portfolio-section">
      <div class="container">

        <div appReveal class="section-heading">
          <div>
            <div class="eyebrow">THE PRODUCT PORTFOLIO</div>

            <h2>
              Hardware designed for<br>
              <span>real-world mobility.</span>
            </h2>
          </div>

          <p>
            Explore reliable vehicle safety, tracking and connectivity technologies.
          </p>
        </div>

        <div class="product-grid">

          @for (p of products; track p.slug; let i = $index) {

            <a
              appReveal
              class="product-card"
              [style.--delay]="(i % 3) * 90 + 'ms'"
              [routerLink]="['/page', p.slug]"
            >

              <div class="product-image" [class.no-image]="!p.image">

                @if (p.image) {
                  <img
                    [src]="p.image"
                    [alt]="p.title"
                    loading="lazy"
                  >
                } @else {
                  <span class="product-placeholder">
                    CTPL
                    <small>TECHNOLOGY</small>
                  </span>
                }

              </div>

              <div class="card-body">

                <div class="card-tag">
                  {{p.eyebrow}}
                </div>

                <h3>{{p.title}}</h3>

                <p>{{p.summary}}</p>

                <span class="card-link">
                  Explore product <span>↗</span>
                </span>

              </div>

            </a>

          }

        </div>
      </div>
    </section>


    <!-- CONNECTED DIGITAL SERVICES -->
    <section class="section home-tech-bg interactive-grid-section">

      <!-- INTERACTIVE GRID BACKGROUND -->
      <div class="grid-hover-layer" aria-hidden="true">

        @for (cell of gridCells; track cell) {
          <span class="grid-cell"></span>
        }

      </div>

      <div class="container">

        <div appReveal class="section-heading">
          <div>
            <div class="eyebrow">CONNECTED DIGITAL SERVICES</div>

            <h2>
              Platforms built to<br>
              <span>support your operations.</span>
            </h2>
          </div>
        </div>

        <div class="service-grid">

          @for (s of services.slice(0, 6); track s.slug; let i = $index) {

            <a
              appReveal
              class="service-card"
              [style.--delay]="(i % 3) * 90 + 'ms'"
              [routerLink]="['/page', s.slug]"
            >

              <div class="service-icon">
                {{['◎', '◇', '▤', '◈', '⌘', '◉'][i]}}
              </div>

              <div>
                <span class="card-tag">{{s.eyebrow}}</span>

                <h3>{{s.title}}</h3>

                <p>{{s.summary}}</p>

                <span class="card-link">
                  Read more... ↗
                </span>
              </div>

            </a>

          }

        </div>

        <div class="section-cta">
          <a class="text-link" routerLink="/page/vltd">
            Explore VLTD state integrations ↗
          </a>
        </div>

      </div>
    </section>


    <!-- SAFETY FIRST -->
    <section class="feature home-tech-bg">
      <div class="container feature-layout">

        <div appReveal>
          <div class="eyebrow eyebrow-light">SAFETY FIRST</div>

          <h2>
            Technology that helps protect every journey.
          </h2>

          <p>
            AIS-140 compliant vehicle tracking and panic-button
            solutions can connect emergency alerts and vehicle
            location information to designated response systems.
          </p>

          <a class="btn btn-primary" routerLink="/page/ais-140-is16833">
            Explore VLTD technology ↗
          </a>
        </div>

        <div class="feature-visual" appReveal>
          <img
            src="assets/images/tranopro.png"
            alt="CTPL vehicle tracking hardware"
            loading="lazy"
          >
        </div>

      </div>
    </section>


    <!-- EXPLORE CTPL -->
    <section class="section section-soft home-tech-bg explore-ctpl-section">
      <div class="container">

        <div appReveal class="section-heading">
          <div>
            <div class="eyebrow">EXPLORE CTPL</div>

            <h2>
              Information for every stakeholder.
            </h2>
          </div>
        </div>

        <div class="pathway-grid">

          @for (item of pathways; track item.slug) {

            <a
              appReveal
              [routerLink]="['/page', item.slug]"
              class="pathway"
            >

              <span>{{item.no}}</span>

              <h3>{{item.name}}</h3>

              <p>{{item.desc}}</p>

              <span class="card-link">
                View section ↗
              </span>

            </a>

          }

        </div>

      </div>
    </section>


    <!-- CONTACT SECTION -->
    <section class="cta-section home-tech-bg">
      <div class="container cta-inner" appReveal>

        <div>
          <div class="eyebrow eyebrow-light">LET’S CONNECT</div>

          <h2>
            Let’s build safer mobility together.
          </h2>

          <p>
            Explore our solutions or connect with CTPL
            to discuss your requirements.
          </p>
        </div>

        <a class="btn btn-primary" routerLink="/page/customer-centre">
          Contact CTPL ↗
        </a>

      </div>
    </section>

  `
})

export class HomeComponent implements AfterViewInit, OnDestroy {

  products = products;
  services = services;
  experience = 18;

  // INTERACTIVE GRID CELLS
  gridCells = Array.from({ length: 600 }, (_, i) => i);

  private counterObserver?: IntersectionObserver;
  private timer?: ReturnType<typeof setInterval>;

  pathways = [
    {
      no: '01',
      slug: 'corporate-information',
      name: 'Investor relations',
      desc: 'Corporate information, governance, reports and disclosures.'
    },
    {
      no: '02',
      slug: 'dealer-enquiry',
      name: 'Dealer centre',
      desc: 'Enquiries, VLTD validity, service centres and approvals.'
    },
    {
      no: '03',
      slug: 'customer-centre',
      name: 'Customer centre',
      desc: 'Support resources and assistance for CTPL customers.'
    }
  ];

  ngAfterViewInit() {

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const element = document.querySelector('.stat-figure');

    if (!element) return;

    this.counterObserver = new IntersectionObserver(entries => {

      if (!entries.some(e => e.isIntersecting)) return;

      this.counterObserver?.disconnect();

      const start = performance.now();

      const tick = () => {

        const elapsed = performance.now() - start;
        const t = Math.min(elapsed / 1100, 1);

        this.experience = Math.round(
          18 * (1 - Math.pow(1 - t, 3))
        );

        if (t >= 1 && this.timer) {
          clearInterval(this.timer);
        }
      };

      this.experience = 0;

      this.timer = setInterval(tick, 35);

    }, { threshold: 0.4 });

    this.counterObserver.observe(element);
  }

  ngOnDestroy() {

    this.counterObserver?.disconnect();

    if (this.timer) {
      clearInterval(this.timer);
    }

  }

}
