
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type SmsCommand = {
  field: string;
  description: string;
  command: string;
  response: string;
};

@Component({
  selector: 'app-tranopro-sms-commands',
  standalone: true,
  imports: [RouterLink],

  template: `

    <!-- FULL WIDTH DIGITAL NETWORK BANNER -->
    <section class="sms-image-hero">

      <h1>TRANO PRO VLTD SMS Commands</h1>

    </section>


    <!-- COMMAND REFERENCE GUIDE -->
    <section class="sms-guide-section">

      <div class="sms-guide-card">

        <h2>
          TRANO PRO VLTD – Command Reference Guide
        </h2>

        <div class="sms-guide-introduction">

          <p>
            This section provides a reference list of
            supported SMS commands for the TRANO PRO VLTD
            device.<br>
            These commands allow users to retrieve real-time
            device information, location data, configuration
            details, and operational status through SMS-based
            communication.
          </p>

          <p>
            Each command returns a structured response
            containing technical and diagnostic information
            to support monitoring, configuration, and
            troubleshooting activities.
          </p>

        </div>

        <!-- SMS COMMAND TABLE -->
        <div class="sms-table-scroll">

          <table class="sms-command-table">

            <thead>
              <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Command</th>
                <th>Response</th>
              </tr>
            </thead>

            <tbody>

              @for (item of smsCommands; track item.field) {

                <tr>

                  <td>{{ item.field }}</td>

                  <td>{{ item.description }}</td>

                  <td>
                    <span class="sms-command-text">
                      {{ item.command }}
                    </span>
                  </td>

                  <td class="sms-response-cell">
                    {{ item.response }}
                  </td>

                </tr>

              }

            </tbody>

          </table>

        </div>

      </div>

    </section>


    <!-- TECHNICAL SUPPORT SECTION -->
    <section class="sms-support-section">

      <div
        class="sms-network-background"
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

      <div class="container sms-support-content">

        <h2>
          Need Assistance with VLTD Commands or Configuration?
        </h2>

        <p>
          If you require help understanding command responses,
          configuring device parameters, or troubleshooting
          operational issues, our technical team is available
          to assist. Connect with us for documentation support
          and configuration guidance.
        </p>

        <a
          routerLink="/page/customer-centre"
          class="sms-support-button"
        >
          CONTACT TECHNICAL SUPPORT
        </a>

      </div>

    </section>

  `
})
export class TranoproSmsCommandsComponent {

  smsCommands: SmsCommand[] = [

    {
      field: 'DEBUG',
      description: 'To get device functional status',
      command: '@GET#DEBUG,',
      response:
        'IMEI-868997035864410, GPS-FIX, GPRS-FIX, SAT-7, HDOP-0.5, IRNSS FIX, SIG-24, IGN-ON, EXT.Batt-13.5V, MEMS SENSOR OK, SPI Memo OK, SW-1.0.0, ODO_MTR-16.2'
    },

    {
      field: 'LOC',
      description: 'To get on-demand location',
      command: '@GET#LOC,',
      response:
        'GPS: Lt-28.472115 N, Ln-077.307856 E'
    },

    {
      field: 'GPS',
      description: 'To get GPS data',
      command: '@GET#GPS,',
      response:
        '#869247045152227, 020722, 111949, 017.448064, 078.588617, Speed-000.18, SAT-09, RTC-11:19:51'
    },

    {
      field: 'GPRS',
      description: 'To get GPRS data',
      command: '@GET#GPRS,',
      response:
        '#861359032242578, 28.472115 N, 077.307856 E, Network-IDEA, Signal-24'
    },

    {
      field: 'INFO',
      description: 'To get device and SIM details',
      command: '@GET#INFO,',
      response:
        'IMEI-861359032242578, SIM-89910473021821137542, VID-AERO, VRN-DL1C5349'
    },

    {
      field: 'CONF',
      description: 'To get device configuration',
      command: '@GET#CONF,',
      response:
        'IP1-35.155.23.246 PORT-20005, IP2-36.154.23.247 PORT-20001, Speed Limit-80 KM/H, APN-internet, AT-10, ST-600, ET-300, TT-30'
    },

    {
      field: 'HLTH',
      description: 'To get device health status',
      command: '@GET#HLTH,',
      response:
        '$, A, AERO, SW-1.0.0, Battery OK, Signal OK, Memory OK'
    }

  ];

}
