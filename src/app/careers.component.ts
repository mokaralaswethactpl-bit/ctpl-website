import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink],

  template: `

    <!-- CAREERS PAGE HEADER -->

    <section class="ctpl-careers-hero">

      <div class="container">

        <div class="ctpl-careers-eyebrow">
          CTPL / CAREERS
        </div>

        <h1>Build Your Career With CTPL</h1>

        <p>
          Be part of a team working on automotive safety,
          vehicle telematics, embedded technology and
          connected mobility solutions.
        </p>

        <a href="#career-opportunities"
           class="ctpl-careers-hero-button"
           (click)="scrollToOpportunities($event)">
          Explore Opportunities
          <span aria-hidden="true">↗</span>
        </a>

      </div>

    </section>


    <!-- =====================================
         GROW WITH INNOVATION
         ===================================== -->

    <section class="ctpl-careers-intro">

      <div class="container">

        <div class="ctpl-careers-intro-grid">

          <!-- LEFT SIDE - INFORMATION -->

          <div class="ctpl-careers-intro-text">

            <div class="ctpl-careers-label">
              WORK WITH US
            </div>

            <h2>Grow With Innovation</h2>

            <p>
              Containe Technologies Limited works in the
              fields of automotive safety, vehicle tracking,
              embedded systems and connected mobility.
            </p>

            <p>
              We value technical knowledge, continuous
              learning, teamwork and a commitment to
              developing reliable technology solutions.
            </p>

            <p>
              Whether your interests lie in engineering,
              software, operations or customer support,
              explore how your skills could contribute
              to our organization.
            </p>

          </div>


          <!-- RIGHT SIDE - TEAM IMAGE -->

          <div class="ctpl-careers-intro-image">

            <img
              src="/assets/images/careers-team.jpg"
              alt="Technology professionals working together"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================
         CAREER AREAS
         ===================================== -->

    <section
      id="career-opportunities"
      class="ctpl-careers-opportunities"
    >

      <div class="container">

        <div class="ctpl-careers-label">
          CAREER OPPORTUNITIES
        </div>

        <h2>Explore Career Areas</h2>

        <p class="ctpl-careers-section-intro">
          Discover the different professional areas
          associated with our technology and business
          operations.
        </p>

        <div class="ctpl-careers-grid">

          @for (area of careerAreas; track area.title) {

            <article class="ctpl-careers-card">

              <span
                class="ctpl-careers-card-icon"
                aria-hidden="true"
              >
                {{ area.icon }}
              </span>

              <h3>{{ area.title }}</h3>

              <p>{{ area.description }}</p>

            </article>

          }

        </div>

      </div>

    </section>


    <!-- =====================================
         CURRENT OPENINGS
         ===================================== -->

    <section class="ctpl-careers-openings">

      <div class="container">

        <div class="ctpl-careers-openings-inner">

          <div class="ctpl-careers-label">
            CURRENT OPENINGS
          </div>

          <h2>Join Our Team</h2>

          <p>
            Current vacancies and application details
            will be published here when confirmed
            by the CTPL team.
          </p>

          <div class="ctpl-careers-empty">

            <span aria-hidden="true">◇</span>

            <div>

              <strong>Job listings</strong>

              <p>
                No verified openings have been added
                to this website yet.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================
         CONTACT / CAREER ENQUIRY
         ===================================== -->

    <section class="ctpl-careers-contact">

      <div class="container">

        <h2>Interested in Working With Us?</h2>

        <p>
          Reach out to CTPL for information about
          employment opportunities and recruitment
          enquiries.
        </p>

        <a
          routerLink="/page/customer-centre"
          class="ctpl-careers-contact-button"
        >
          CONTACT CTPL
          <span aria-hidden="true">↗</span>
        </a>

      </div>

    </section>

  `
})
export class CareersComponent {

  /* =====================================
     CAREER AREAS
     ===================================== */

  careerAreas = [

    {
      icon: '⌘',
      title: 'Embedded Systems & R&D',
      description:
        'Explore engineering disciplines connected to embedded devices, electronic systems and technology development.'
    },

    {
      icon: '▣',
      title: 'Software Development',
      description:
        'Explore software platforms, applications and digital solutions supporting connected mobility.'
    },

    {
      icon: '⚙',
      title: 'Production & Quality',
      description:
        'Explore manufacturing operations, testing processes and product quality activities.'
    },

    {
      icon: '◎',
      title: 'Technical Support',
      description:
        'Explore technical assistance, diagnostics, device servicing and support operations.'
    },

    {
      icon: '↗',
      title: 'Sales & Business Development',
      description:
        'Explore customer relationships, dealer coordination and business development activities.'
    },

    {
      icon: '◈',
      title: 'Operations & Administration',
      description:
        'Explore business operations, coordination and administrative functions.'
    }

  ];


  /* =====================================
     SCROLL TO CAREER OPPORTUNITIES
     ===================================== */

  scrollToOpportunities(event: Event): void {

    event.preventDefault();

    document
      .getElementById('career-opportunities')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

  }

}