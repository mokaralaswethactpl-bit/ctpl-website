
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-esim-validity',
  standalone: true,
  imports: [RouterLink, RevealDirective],

  template: `

    <!-- =====================================
         E-SIM VALIDITY TOP BANNER
         ===================================== -->

    <section class="esim-validity-hero">
      <h1>E-SIM Validity</h1>
    </section>


    <!-- =====================================
         E-SIM PROFILE MANAGEMENT
         ===================================== -->

    <section class="vlt-info-section esim-validity-info">

      <div class="vlt-info-card">

        <h2>
          e-SIM Validity & Profile Management
        </h2>

        <p class="vlt-description">
          It helps users understand profile activation
          status, validity timelines, and switching options
          to maintain uninterrupted connectivity. Timely
          monitoring and renewal of e-SIM validity ensure
          continued access to active network profiles and
          redundancy support.
        </p>

        <!-- THREE LOGO CARDS -->

        <div class="vlt-logo-grid esim-validity-grid">

          <!-- DIGITAL INDIA -->
          <div class="vlt-logo-card esim-validity-logo">

            <img
              src="/assets/images/digital-india.png"
              alt="Digital India - Power To Empower"
              loading="lazy"
            />

            <span class="esim-go-label">Go</span>

          </div>

          <!-- VAHAN -->
          <div class="vlt-logo-card esim-validity-logo">

            <img
              src="/assets/images/vahan.png"
              alt="VAHAN NR e-Services"
              loading="lazy"
            />

            <span class="esim-go-label">Go</span>

          </div>

          <!-- NIC -->
          <div class="vlt-logo-card esim-validity-logo">

            <img
              src="/assets/images/nic.png"
              alt="NIC National Informatics Centre"
              loading="lazy"
            />

            <span class="esim-go-label">Go</span>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================
         E-SIM SUPPORT SECTION
         ===================================== -->

    <section class="vlt-support-section esim-validity-support">

      <div
        class="vlt-network-background"
        aria-hidden="true"
      >

        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="xMidYMid slice"
        >

          <g
            fill="none"
            stroke="#66818c"
            stroke-width="0.8"
            opacity="0.48"
          >

            <path d="M40 40 L150 20 L120 95 L70 130 L40 40"/>
            <path d="M40 40 L120 95 L150 20"/>

            <path d="M330 20 L450 55 L650 30 L720 125"/>
            <path d="M790 15 L900 65 L840 160 L790 15"/>

            <path d="M900 65 L850 220 L940 285 L840 160"/>
            <path d="M45 210 L130 250 L85 310 L45 210"/>

            <path d="M1030 20 L1150 60"/>
            <path d="M1140 190 L1130 270"/>

            <path d="M150 20 L210 90 L120 95"/>
            <path d="M330 20 L370 130 L450 55"/>
            <path d="M650 30 L620 180 L720 125"/>
            <path d="M790 15 L840 160 L720 125"/>
            <path d="M940 285 L1030 220 L1130 270"/>

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
            <circle cx="85" cy="310" r="2"/>

            <circle cx="1030" cy="20" r="2"/>
            <circle cx="1150" cy="60" r="2"/>
            <circle cx="1130" cy="270" r="2"/>

          </g>

        </svg>

      </div>

      <div class="container vlt-support-content">

        <h2>
          Need Help with e-SIM Validity or Profile Management?
        </h2>

        <p>
          For information on e-SIM validity, supported
          profiles, or renewal procedures, connect with
          our support team. We can assist with profile
          activation, switching guidance, and validity-related
          queries.
        </p>

        <a
          routerLink="/page/customer-centre"
          class="vlt-support-button"
        >
          GET SUPPORT
        </a>

      </div>

    </section>

  `
})
export class EsimValidityComponent {}
