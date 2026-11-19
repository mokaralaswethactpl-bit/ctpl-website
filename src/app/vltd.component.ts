
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from './reveal.directive';
type StateCard = {
  name: string;
  description: string;
  image: string;
  url: string;
};

type Department = {
  title: string;
  rows: StateCard[][];
};

@Component({
  selector: 'app-vltd',
  standalone: true,
  imports: [RouterLink, RevealDirective],

  template: `

    
<!-- VLTD PAGE HEADER -->

<section class="page-hero original-vltd-hero">

  <div class="container">

    <div class="eyebrow eyebrow-light">
      CTPL / Services
    </div>

    <h1>VLTD State Integrations</h1>

    <p>
      Across India, we work in partnership with State
      Governments and Departments to deploy AIS-140
      compliant VLTD solutions. Our platforms integrate
      directly with approved backend systems in Transport,
      Mining, and allied Government sectors. Designed for
      real-time visibility and regulatory compliance, our
      solutions support structured monitoring ecosystems.
      This growing footprint highlights our capability to
      deliver secure, scalable, and government-aligned
      tracking infrastructure nationwide.
    </p>

    <div class="page-hero-actions">

      <a
        routerLink="/"
        class="btn btn-outline-light"
      >
        ← Back to homepage
      </a>

    </div>

  </div>

</section>

    <!-- ORIGINAL DEPARTMENT SECTIONS -->

    <section class="original-vltd-body">

      <div class="original-vltd-container">

        @for (department of departments; track department.title) {

          <section class="original-vltd-department">

            <h2>{{ department.title }}</h2>

            @for (row of department.rows; track $index) {

              <div class="original-vltd-grid">

                @for (state of row; track $index) {

                 <article class="original-vltd-card" appReveal>

                    <div class="original-vltd-logo">

                      <img
                        [src]="imageBase + state.image"
                        [alt]="state.name"
                        loading="lazy"
                      />

                    </div>

                    <h5>{{ state.name }}</h5>

                    <p>{{ state.description }}</p>

                    @if (state.url) {

                      <a
                        class="original-vltd-go"
                        [href]="state.url"
                        (click)="handlePortalClick($event, state)"
                      >
                        Go to Portal »
                      </a>

                    } @else {

                      <button
                        type="button"
                        class="original-vltd-go"
                      >
                        Go to Portal »
                      </button>

                    }

                  </article>

                }

              </div>

            }

          </section>

        }

      </div>

    </section>

  `
})
export class VltdComponent {

  readonly imageBase = '/assets/images/';

  handlePortalClick(event: MouseEvent, state: StateCard): void {
    // Original placeholder links stay on this page.
    if (state.url === 'https://containe.in/vltd/#') {
      event.preventDefault();
    }
  }

  departments: Department[] = [

    // =====================================
    // MINING & MINERAL DEPARTMENT
    // =====================================

    {
      title: 'Mining & Mineral Department',

      rows: [

        [
          {
            name: 'Andhra Pradesh',
            description:
              'Andhra Pradesh Mineral Vehicle Tracking System (Mining)',
            image: 'APMVTS.jpg',
            url: 'https://apmvts.apsac.ap.gov.in/#/'
          },

          {
            name: 'Telangana',
            description:
              'Telangana Mineral Development Corporation LTD(Mining)',
            image: 'Telangana.png',
            url: 'https://tgmdc.telangana.gov.in/'
          },

          {
            name: 'Rajasthan',
            description:
              'Department of mines and geology(mining)',
            image: 'uttrakhandShasan.png',
            url: 'https://minesportal.rajasthan.gov.in/'
          }
        ]

      ]
    },


    // =====================================
    // TRANSPORT DEPARTMENT
    // =====================================

    {
      title: 'Transport Department',

      rows: [

        // ROW 1

        [
          {
            name: 'Delhi',
            description:
              'NIC (National Informatics Centre), Delhi (Transport)',
            image: 'uttrakhandShasan.png',
            url: 'https://vlts.delhi.gov.in/Home.aspx'
          },

          {
            name: 'Himachal Pradesh',
            description:
              'Surakshamitra (Transport)',
            image: 'surakshaMitra.png',
            url: 'https://www.vltd.hp.gov.in/'
          },

          {
            name: 'Kerala',
            description:
              'Department of mines and geology (Transport)',
            image: 'Kerala_Motor_Vehicles_Department_logo.jpg',
            url: 'https://tracking.keralamvd.gov.in/'
          },

          {
            name: 'Karnataka',
            description:
              'Department of mines and geology (Transport)',
            image: 'surakshaMitra.png',
            url: 'https://vltstd.karnataka.gov.in/#'
          },

          {
            name: 'Ladakh',
            description:
              'Vahan Setu (Transport)',
            image: 'Ladakh.png',
            url: 'https://vltdladakh.in/'
          }
        ],


        // ROW 2

        [
          {
            name: 'Madhya Pradesh',
            description:
              'Madhya Pradesh BSNL Backend (Transport)',
            image: 'BSNLTrackingBackend.jpeg',
            url: 'https://mp.vltsecurity.com/#/login'
          },

          {
            name: 'Maharashtra',
            description:
              'Vahan Shakti (Transport)',
            image: 'VahanShakti.png',
            url: 'https://www.vahanshakti.in/'
          },

          {
            name: 'Nagaland',
            description:
              'Department of mines and geology (Transport)',
            image: 'Kerala_Motor_Vehicles_Department_logo.jpg',
            url: 'https://mvdnagaland.in/'
          },

          {
            name: 'Odisha',
            description:
              'MOYatra Suraksha (Transport)',
            image: 'odisha-govt-authority.jpg',
            url: 'https://vltdcp.odishatransport.gov.in/login'
          },

          {
            name: 'Punjab',
            description:
              'Vahan Setu (Transport)',
            image: 'Ladakh.png',
            url: 'https://transport.punjab.gov.in/en/vehicle-location-tracking-device/'
          }
        ],


        // ROW 3

        [
          {
            name: 'Tripura',
            description:
              'Vahan Mitra Backend (Transport)',
            image: 'GovtOfTripura.png',
            url: 'https://tr.vahanmitra.org/'
          },

          {
            name: 'Tamil Nadu',
            description:
              'Surakshamitra (Transport)',
            image: 'surakshaMitra.png',
            url: 'https://stavlts.tn.gov.in/'
          },

          {
            name: 'Uttarakhand',
            description:
              'National Informatics Centre Uttarakand (Transport)',
            image: 'uttrakhandShasan.png',
            url: 'https://vlt.uk.gov.in/Home.aspx'
          },

          {
            name: 'Uttar Pradesh',
            description:
              'National Informatics Centre Uttar Pradesh (Transport)',
            image: 'uttrakhandShasan.png',
            url: 'https://vlts.up.gov.in/Home.aspx'
          },

          {
            name: 'West Bengal',
            description:
              'Delhi Integrated Multi-Modal Transit System Limited (Transport)',
            image: 'WestBengalTransportDepartmentDIMTS-1.png',
            url: 'https://wbnrc.wb.gov.in/vehicles'
          }
        ],


        // ROW 4 - ORIGINAL REPEATED STATES

        [
          

        ]

      ]
    },


    // =====================================
    // FOOD CORPORATION
    // =====================================

    {
      title: 'Food Corporation',

      rows: [

        [
          {
            name: 'West Bengal',
            description:
              'West Bengal Civil Supplies (Food Corporation)',
            image: 'WestBengalTransportDepartmentDIMTS-1.png',
            url: 'https://wbnrc.wb.gov.in/vehicles'
          }
        ]

      ]
    },


    // =====================================
    // DEPARTMENT OF MINES & GEOLOGY
    // GOVT. OF RAJASTHAN
    // =====================================

    {
      title: 'Department of Mines & Geology Govt. of Rajasthan',

      rows: [

        [
          {
            name: 'Rajasthan',
            description:
              'Department of mines and geology (DMGGOR)',
            image: 'uttrakhandShasan.png',
            url: 'https://minesportal.rajasthan.gov.in/'
          }
        ]

      ]
    }

  ];

}
