
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type DocumentLink = {
  title: string;
  url: string;
};

type AnnouncementYear = {
  year: string;
  documents: DocumentLink[];
};

@Component({
  selector: 'app-corporate-information',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `

    
<!-- CORPORATE INFORMATION HEADER -->
<section class="page-hero ci-heading">

  <div class="container">

    <div class="eyebrow eyebrow-light">
      CTPL / INVESTORS
    </div>

    <h1>Corporate Information</h1>

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


    <main class="ci-container">

      <!-- CHAIRMAN'S MESSAGE -->
      <section class="ci-chairman">
        <div class="ci-message">
          <h2>Chairman’s Message</h2>
          <h2>2025–2026</h2>

          <p class="ci-signature">
            <strong>Anand Kumar Seethala</strong><br>
            <strong>
              Founder & Chairman, Containe Technologies
              Limited (CTPL)
            </strong>
          </p>

          <p>
            My entrepreneurial journey began in 1991,
            shortly after completing my Honours Diploma in
            Advanced Systems Management from Informatics
            Computer Systems, Delhi. What started as a
            passion for technology soon evolved into a
            mission—to democratize digital literacy and
            empower communities through accessible computing.
          </p>

          <p>
            In the early years, my team and I conceptualized
            and launched the CLAP (Computer Literacy Awareness
            Program), a foundational computer course designed
            specifically for school students. The response
            was overwhelming, and this initiative laid the
            groundwork for our deeper foray into the world
            of technology solutions. We soon expanded into
            software development and personal computer systems
            assembly, serving educational institutions,
            government offices, and commercial enterprises
            across the country.
          </p>

          <p>
            The turning point came in 2008, when we recognized
            a critical gap in India’s automotive safety
            ecosystem. With a vision to contribute
            meaningfully to public safety and regulatory
            compliance, I founded Containe Technologies
            Limited (CTPL). Our mission was clear: to pioneer
            indigenous research, design, and manufacturing
            of embedded systems for automotive safety,
            starting with Speed Limiting Devices (SLD) and
            Vehicle Location Tracking (VLT) devices compliant
            with the Central Motor Vehicles Rules (CMVR).
          </p>

          <p>
            We established our own state-of-the-art
            manufacturing facility, built a team of skilled
            engineers, and committed ourselves to the highest
            standards of quality—adhering to AIS, BIS, and ISO
            norms from day one.
          </p>

          <p>
            By 2018, as India’s mobility landscape began
            transforming rapidly, we strategically pivoted
            toward vehicle telematics and intelligent
            transport solutions. Under the banner of
            <strong>TRANO</strong>, our integrated platform
            for fleet intelligence and compliance management,
            CTPL emerged as a trusted partner in the national
            push for smarter, safer transportation.
          </p>

          <p>
            Today, with over 4 lakh SLDs installed nationwide,
            a pan-India dealer network, and a robust R&D engine
            driving innovations like Variable Speed Limiters
            and AIS-140-compliant systems, I am filled with
            gratitude—for my team, our partners, and the
            regulators who believed in homegrown innovation.
          </p>

          <p>
            As we look ahead, our purpose remains unchanged:
            to protect lives through technology, to serve
            the nation through compliance, and to build a
            legacy rooted in integrity, innovation, and impact.
          </p>

          <p>Thank you for being part of our journey.</p>

          <p>
            <strong>
              Together, we are not just building devices—we
              are building a safer tomorrow.
            </strong>
          </p>
        </div>

        <aside class="ci-chairman-photo">
          <img
            src="https://containe.in/wp-content/uploads/2025/12/Managing-Director-pic.png"
            alt="Anand Kumar Seethala"
          >
        </aside>
      </section>

      <!-- BOARD OF DIRECTORS -->
      <section class="ci-directors">
        <h2>Board of Directors</h2>

        <div class="ci-director-grid">

          <article class="ci-director">
            <img
              src="/assets/images/aks-profile.png"
              alt="Anand Kumar Seethala"
            >
            <h5>ANAND KUMAR SEETHALA</h5>
            <p>Managing Director</p>
          </article>

          <article class="ci-director">
            <img
              src="/assets/images/bb-profile.png"
              alt="Bhavani Botcha"
            >
            <h5>BHAVANI BOTCHA</h5>
            <p>Executive Director</p>
          </article>

        </div>
      </section>

      <!-- 12 ORIGINAL CORPORATE SECTIONS -->
      <section class="ci-tabs-section">

        <div class="ci-tabs-layout">

          <nav class="ci-tabs" aria-label="Corporate Information">

            @for (tab of tabs; track tab) {
              <button
                type="button"
                [class.active]="activeTab() === $index"
                [attr.aria-current]="activeTab() === $index ? 'true' : null"
                (click)="selectTab($index)"
              >
                {{ tab }}
              </button>
            }

          </nav>

          <div class="ci-tab-content">

            <!-- 1. STAKE HOLDERS -->
            @if (activeTab() === 0) {
              <div class="ci-table-scroll">
                <table class="ci-table">
                  <thead>
                    <tr>
                      <th>SN</th>
                      <th>Name of the Director</th>
                      <th>Status in Committee</th>
                      <th>Nature of Directorship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Sunmeet Singh</td>
                      <td>Chairman</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Madhi Doraiswamy</td>
                      <td>Member</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Anand Kumar Seethala</td>
                      <td>Member</td>
                      <td>Managing Director</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            <!-- 2. NOMINATION COMMITTEE -->
            @if (activeTab() === 1) {
              <div class="ci-table-scroll">
                <table class="ci-table">
                  <thead>
                    <tr>
                      <th>SN</th>
                      <th>Name of the Director</th>
                      <th>Status in Committee</th>
                      <th>Nature of Directorship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Madhi Doraiswamy</td>
                      <td>Chairman</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Sunmeet Singh</td>
                      <td>Member</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Vijaykumari Botcha</td>
                      <td>Member</td>
                      <td>Non-Executive Director</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            <!-- 3. AUDIT COMMITTEE -->
            @if (activeTab() === 2) {
              <div class="ci-table-scroll">
                <table class="ci-table">
                  <thead>
                    <tr>
                      <th>SN</th>
                      <th>Name of the Director</th>
                      <th>Status in Committee</th>
                      <th>Nature of Directorship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Sunmeet Singh</td>
                      <td>Chairman</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Madhi Doraiswamy</td>
                      <td>Member</td>
                      <td>Independent Director</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Vijaykumari Botcha</td>
                      <td>Member</td>
                      <td>
                        Non-Executive, Non-Independent Director
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            <!-- 4. POLICIES -->
            @if (activeTab() === 3) {
              <div class="ci-policies">
                @for (policy of policies; track policy.url) {
                  <a
                    class="ci-policy"
                    [href]="policy.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">📄</span>
                    <strong>{{ policy.title }}</strong>
                  </a>
                }
              </div>
            }

            <!-- 5. OUR RTA -->
            @if (activeTab() === 4) {
              <div class="ci-table-scroll">
                <table class="ci-table ci-info-table">
                  <tbody>
                    <tr>
                      <th>Company Name</th>
                      <td>Cameo Corporate Services Limited</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>
                        Subramanian Building, #1, Club House Road,<br>
                        Chennai – 600 002, India
                      </td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>
                        044 – 2846 0390 / 91 / 92 / 93 / 94 / 95<br>
                        044 – 4002 0700<br>
                        044 – 4002 0710<br>
                        +91 44 – 2846 0129
                      </td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>
                        <a href="mailto:cameo@cameoindia.com">
                          cameo&#64;cameoindia.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Website</th>
                      <td>
                        <a
                          href="https://www.cameoindia.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.cameoindia.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            <!-- 6. INVESTOR GRIEVANCES -->
            @if (activeTab() === 5) {
              <div class="ci-contact">
                <strong>Nikitha Sarda</strong>
                <p>Company Secretary & Compliance Officer</p>

                <strong>Containe Technologies Limited</strong>
                <p>
                  3-13-142 / 341P, 342, Gokul Nagar,
                  Marriguda, Mallapur,<br>
                  Secunderabad, Hyderabad, Telangana – 500076
                </p>

                <p>
                  <strong>Phone:</strong> 8143224767<br>
                  <strong>Email:</strong>
                  <a href="mailto:cs@containe.in">
                    cs&#64;containe.in
                  </a>
                </p>
              </div>
            }

            <!-- 7. SCORES -->
            @if (activeTab() === 6) {
              <div class="ci-contact">
                <strong>Nikitha Sarda</strong>
                <p>Company Secretary & Compliance Officer</p>

                <strong>CONTAINE TECHNOLOGIES LIMITED</strong>
                <p>
                  3-13-142 / 341P, 342,<br>
                  Gokul Nagar, Marriguda, Mallapur,<br>
                  Secunderabad, Hyderabad, Telangana – 500076
                </p>

                <p>
                  <strong>Phone:</strong>
                  <a href="tel:8143224767">8143224767</a><br>
                  <strong>Email:</strong>
                  <a href="mailto:cs@containe.in">
                    cs&#64;containe.in
                  </a>
                </p>
              </div>
            }

            <!-- 8. LISTING DOCUMENTS -->
            @if (activeTab() === 7) {
              <ul class="ci-list">
                @for (item of listingDocuments; track item) {
                  <li>{{ item }}</li>
                }
              </ul>

              <div class="ci-downloads">
                <a
                  href="https://containe.in/corporate-information/#Content-72ce0106af2a256455dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Online Application Form
                </a>

                <a
                  href="https://containe.in/corporate-information/#Content-72ce0106af2a256455dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Revision Application Form
                </a>

                <a
                  href="https://containe.in/corporate-information/#Content-72ce0106af2a256455dc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Blank Application Form
                </a>
              </div>
            }

            <!-- 9. BANKERS -->
            @if (activeTab() === 8) {
              <div class="ci-banks">
                @for (bank of banks; track bank.name) {
                  <div class="ci-bank">
                    <img [src]="bank.image" [alt]="bank.name">
                    <strong>{{ bank.name }}</strong>
                  </div>
                }
              </div>
            }

            <!-- 10. PRESS RELEASE -->
            @if (activeTab() === 9) {
              <ul class="ci-list">
                <li>Press release item 1</li>
                <li>Press release item 2</li>
                <li>Press release item 3</li>
              </ul>
            }

            <!-- 11. NEWS ROOM -->
            @if (activeTab() === 10) {
              <div class="ci-news-empty"></div>
            }

            <!-- 12. ANNOUNCEMENTS -->
            @if (activeTab() === 11) {
              <div class="ci-announcements">

                @for (year of announcements; track year.year) {

                  <div class="ci-year">
                    <div class="ci-year-title">
                      Year {{ year.year }}
                    </div>

                    @for (
                      document of year.documents;
                      track document.url
                    ) {
                      <div class="ci-announcement">
                        <span>{{ document.title }}</span>

                        <a
                          [href]="document.url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          VIEW PDF
                        </a>
                      </div>
                    }
                  </div>
                }

              </div>
            }

          </div>

        </div>

      </section>

    </main>
  `
})
export class CorporateInformationComponent {

  activeTab = signal(0);

  selectTab(index: number): void {
    this.activeTab.set(index);
  }

  tabs = [
    'Constitution of Stake Holders Relationship Committee',
    'Constitution of Nomination & Remuneration Committee',
    'Constitution of Audit Committee',
    'Policies',
    'Our RTA',
    'Investor Grievances',
    'SCORES',
    'Listing Documents',
    'Bankers & Financial Institutions',
    'Press Release',
    'News Room',
    'Announcements'
  ];

  policies: DocumentLink[] = [
    {
      title: 'Archival Policy',
      url: 'https://containe.in/wp-content/uploads/2026/03/01_ARCHIVAL-POLICY.pdf'
    },
    {
      title: 'Code of Conduct For Directors & Senior Management Personnel',
      url: 'https://containe.in/wp-content/uploads/2026/03/02_CODE-OF-CONDUCT-FOR-DIRECTORS-_-SENIOR-MANAGEMENT-PERSONNEL.pdf'
    },
    {
      title: 'Code of Practices And Fair Disclosure of UPSI',
      url: 'https://containe.in/wp-content/uploads/2026/03/03_CODE-OF-PRACTICES-AND-FAIR-DISCLOSURE-OF-UPSI.pdf'
    },
    {
      title: 'Familiarization Programme For Independent Directors',
      url: 'https://containe.in/wp-content/uploads/2026/03/04_FAMILIARIZATION-PROGRAMME-FOR-INDEPENDENT-DIRECTORS.pdf'
    },
    {
      title: 'Materiality of Events Policy',
      url: 'https://containe.in/wp-content/uploads/2026/03/05_MATERIALITY-OF-EVENTS-POLICY.pdf'
    },
    {
      title: 'Nomination And Remuneration Policy',
      url: 'https://containe.in/wp-content/uploads/2026/03/06_NOMINATION-AND-REMUNERATION-POLICY.pdf'
    },
    {
      title: 'Policy on Related Party Transactions',
      url: 'https://containe.in/wp-content/uploads/2026/03/07-POLICY-ON-RELATED-PARTY-TRANSACTIONS.pdf'
    },
    {
      title: 'Policy For Determining Material Subsidiary',
      url: 'https://containe.in/wp-content/uploads/2026/03/08_POLICY-FOR-DETERMINING-MATERIAL-SUBSIDIARY.pdf'
    },
    {
      title: 'Policy For Inquiry in case of leak of UPSI',
      url: 'https://containe.in/wp-content/uploads/2026/03/09_POLICY-FOR-INQUIRY-IN-CASE-OF-LEAK-OF-UPSI.pdf'
    },
    {
      title: 'Terms And Conditions – For Appointment of Independent Director',
      url: 'https://containe.in/wp-content/uploads/2026/03/10_TERMS-AND-CONDITIONS-FOR-THE-APPOINTMENT-OF-AN-INDEPENDENT-DIRECTOR.pdf'
    },
    {
      title: 'Whistle Blower Policy – Vigil Mechanism',
      url: 'https://containe.in/wp-content/uploads/2026/03/11_WHISTLE-BLOWER-POLICY-VIGIL-MECHANISM.pdf'
    }
  ];

  listingDocuments = [
    'Draft Prospectus',
    'Final Prospectus',
    'Abridged Prospectus',
    'General Information Document',
    'Pre-Issue Advertisement',
    'Basis of Allotment Advertisement'
  ];

  banks = [
    {
      name: 'INDUSIND Bank',
      image: 'https://containe.in/wp-content/uploads/2026/03/indus-scaled.png'
    },
    {
      name: 'State Bank of India',
      image: 'https://containe.in/wp-content/uploads/2026/03/SBI-Logo-scaled.png'
    },
    {
      name: 'ICICI Bank',
      image: 'https://containe.in/wp-content/uploads/2026/03/icici_bank-scaled.png'
    },
    {
      name: 'HDFC Bank',
      image: 'https://containe.in/wp-content/uploads/2026/03/HDFC-Bank-scaled.png'
    }
  ];

  announcements: AnnouncementYear[] = [
    {
      year: '2025 – 26',
      documents: [
        {
          title: 'Disclosures : Approval of VLTD Tamil Nadu',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_VLTD_Tamil-Nadu_26-11-2025.pdf'
        },
        {
          title: 'Disclosures : Empanellemnt of VLTD Tripura',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_VLTD_Tripura_19112025_Signed.pdf'
        },
        {
          title: 'Disclosures : Enlistment if VLTD Rajasthan',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_Enlistment_VLTD_Rajasthan_270125.pdf'
        },
        {
          title: 'Disclosures : Enlistment of VLTD Uttar Pradesh',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_Enlistment_VLTD_UttarPradesh_10112025.pdf'
        },
        {
          title: 'Disclosures : Disclosure UK Export Order_26 11 2025',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_UK-Export-Order_26-11-2025.pdf'
        },
        {
          title: 'Disclosures : Disclosure UK Export Order_27 11 2025',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure_UK-Export-Order_27.11.2025.pdf'
        }
      ]
    },
    {
      year: '2024 – 25',
      documents: [
        {
          title: 'Disclosures : BSE Intimation_Approval from ARAI Signed',
          url: 'https://containe.in/wp-content/uploads/2026/03/BSE-Intimation_Approval-from-ARAI-Signed.pdf'
        }
      ]
    },
    {
      year: '2023 – 24',
      documents: [
        {
          title: 'Intimation Under Regulation 30: Approval of VLT Device for Karnataka.',
          url: 'https://containe.in/wp-content/uploads/2026/03/9896dfc4-82b8-4145-82c3-9192e13714d4.pdf'
        },
        {
          title: 'Receipt of Approval for VLT Device usage in Odisha.',
          url: 'https://containe.in/wp-content/uploads/2026/03/3709d456-1449-4b4b-88d7-2e7701e3f553.pdf'
        },
        {
          title: 'Approval for Supply and Fitment of VLT Device in Nagaland.',
          url: 'https://containe.in/wp-content/uploads/2026/03/b141b355-a299-4dae-bb05-b4c7890ff833.pdf'
        },
        {
          title: 'Disclosures : Karnataka',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure-Reg-30_-approval-of-VLT_05-03-2024_Signed.pdf'
        }
      ]
    },
    {
      year: '2022 – 23',
      documents: [
        {
          title: 'Receipt of Approval of Registration of VLT Device for Andhra Pradesh.',
          url: 'https://containe.in/wp-content/uploads/2026/03/e44b5a19-2f82-46b4-bf0b-8ecf73601ba4.pdf'
        },
        {
          title: 'Registration of VLT Device for usage in West Bengal.',
          url: 'https://containe.in/wp-content/uploads/2026/03/6837fc65-e310-41fb-8c31-7d90c4f6b802.pdf'
        },
        {
          title: 'Registration of VLT Device for Madhya Pradesh and Delhi.',
          url: 'https://containe.in/wp-content/uploads/2026/03/646b9a1d-58a0-4c9b-a193-c10051c8fe9a.pdf'
        },
        {
          title: 'Disclosures : Nagaland',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure-Reg-30_-approval-of-VLT.pdf'
        },
        {
          title: 'Disclosures : Madhya Pradesh & NCR Delhi',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure-Reg-30_-approval-of-VLT_25.10.2022_CTL.pdf'
        },
        {
          title: 'Disclosures : Odisha',
          url: 'https://containe.in/wp-content/uploads/2026/03/Disclosure-Reg-30_-approval-of-VLT_12-10-2023_Signed.pdf'
        }
      ]
    }
  ];
}
