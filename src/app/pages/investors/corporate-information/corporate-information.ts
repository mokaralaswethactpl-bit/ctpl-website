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
  templateUrl: './corporate-information.html',
  styleUrl: './corporate-information.css'
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