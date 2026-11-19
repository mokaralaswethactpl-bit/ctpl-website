
/**
 * CTPL Website Content
 * Containe Technologies Limited
 *
 * Editable website content and navigation.
 */

export type ContentPage = {
  slug: string;
  title: string;
  group: string;
  eyebrow: string;
  summary: string;
  bullets?: string[];
  source: string;
  image?: string;
  note?: string;
};

/* =========================================
   CTPL PRODUCTS
   ========================================= */

export const products: ContentPage[] = [
  {
    slug: 'motoreye-efrt',
    title: 'MotorEye · EFRT',
    group: 'Products',
    eyebrow: 'Speed management',
    summary:
      'Advanced speed limiting solution for legacy commercial vehicles.',
    source: 'https://containe.in/motoreye-model-efrt/',
    image: '/assets/images/motoreye.png',
    note:
      'Original detail URL displayed unrelated shopping content during review. Verify specifications against approved product literature.'
  },

  {
    slug: 'limits-epi',
    title: 'Limits · EPI',
    group: 'Products',
    eyebrow: 'Electronic pedal interface',
    summary:
      'Precision speed limiter for commercial vehicles.',
    source: 'https://containe.in/limits-model-epi/',
    image: '/assets/images/limits-epi.png',
    note:
      'Original detail URL displayed unrelated shopping content during review. Verify specifications against approved product literature.'
  },

  {
    slug: 'geo-limits-gsld',
    title: 'Geo-Limits · GSLD',
    group: 'Products',
    eyebrow: 'Geofencing',
    summary:
      'Geofencing-based speed control with secure mobile profile management.',
    source: 'https://containe.in/geo-limits-model-gsld/',
    image: '/assets/images/geo-limits-gsld.png'
  },

  {
    slug: 'ais-140-is16833',
    title: 'AIS-140 / IS 16833',
    group: 'Products',
    eyebrow: 'Vehicle location tracking',
    summary:
      'TRPRO140 — AIS-140 / IS 16833 compliant Vehicle Location Tracking Device (VLTD).',
    source: 'https://containe.in/ais-140-is16833/',
    image: '/assets/images/tranopro.png'
  },

  {
    slug: 'embedded-esim',
    title: 'Embedded e-SIM',
    group: 'Products',
    eyebrow: 'Connectivity',
    summary:
      'Future-ready, secure and redundant network access for mission-critical connected applications.',
    source:
      'https://containe.in/embedded-e-sim-connectivity-solution/',
    image: '/assets/images/esim.png'
  },

  {
    slug: 'trano-rfid',
    title: 'Trano RFID',
    group: 'Products',
    eyebrow: 'Identification',
    summary:
      'Intelligent contactless identification and tracking system.',
    source: 'https://containe.in/trano-rfid/',
    image: '/assets/images/trano-rfid.png'
  }
];

/* =========================================
   CTPL SERVICES - EXPANDED CONTENT
   ========================================= */

export const services: ContentPage[] = [

  // 1. TRANO
  {
    slug: 'trano',
    title: 'TRANO',
    group: 'Services',
    eyebrow: 'VTS tracking',
    summary:
      'TRANO is a vehicle tracking platform designed to support connected mobility and fleet monitoring operations. It helps organizations manage vehicle-related information through a centralized digital environment, providing better visibility into day-to-day fleet activities. The platform supports the operational needs of businesses that depend on vehicle tracking technology, helping improve coordination, monitoring efficiency and access to information for transport and fleet management teams.',
    source: 'https://containe.in/services/',
    image: '/assets/images/trano.jpg'
  },

  // 2. TRANOPRO
  {
    slug: 'tranopro',
    title: 'TRANOPRO',
    group: 'Services',
    eyebrow: 'AIS-140 tracking',
    summary:
      'TRANOPRO is a tracking platform developed to support vehicle location tracking devices associated with AIS-140 applications. It provides a digital environment for managing vehicle tracking information and monitoring connected transport operations. Designed for organizations working with commercial and regulated vehicle fleets, TRANOPRO helps bring vehicle-related information into an organized platform for operational oversight, reporting workflows and day-to-day tracking requirements.',
    source: 'https://containe.in/services/',
    image: '/assets/images/tranopro-service.jpg'
  },

  // 3. CTPL ERP
  {
    slug: 'ctpl-erp',
    title: 'CTPL ERP',
    group: 'Services',
    eyebrow: 'Business systems',
    summary:
      'CTPL ERP is an enterprise resource planning solution intended to support business processes associated with Speed Limiting Devices and Vehicle Location Tracking Devices. It brings operational activities into a structured digital environment, helping teams coordinate information across device-related workflows and business functions. The system is positioned to assist with organizational efficiency, information management and coordination between departments involved in connected mobility products and services.',
    source: 'https://containe.in/services/',
    image: '/assets/images/ctpl-erp.jpg'
  },

  // 4. MIS CONVERTZ
  {
    slug: 'mis-convertz',
    title: 'MIS · CONVERTZ',
    group: 'Services',
    eyebrow: 'Installation management',
    summary:
      'MIS · CONVERTZ is a management information system focused on device installations and renewal-related activities. It supports the organization of operational information used by teams responsible for managing these processes. By bringing installation and renewal records into a structured workflow, the platform is intended to improve visibility, coordination and consistency across service activities, helping businesses manage recurring administrative and operational requirements more efficiently.',
    source: 'https://containe.in/services/',
    image: '/assets/images/mis-convertz.jpg'
  },

  // 5. UMIS
  {
    slug: 'umis',
    title: 'Unified Management System',
    group: 'Services',
    eyebrow: 'Unified management',
    summary:
      'UMIS is a unified management platform designed to support connected operations through a centralized approach to information and workflow management. It is intended to help organizations organize operational activities and improve coordination between processes that would otherwise require separate management efforts. By providing a common digital environment for relevant operational information, UMIS supports more structured monitoring, administrative efficiency and management oversight.',
    source: 'https://containe.in/services/',
    image: '/assets/images/umis.jpg'
  },

  // 6. CTPL DIALER
  {
    slug: 'ctpl-dialer',
    title: 'CTPL Dialer',
    group: 'Services',
    eyebrow: 'Customer support',
    summary:
      'CTPL Dialer supports customer communication and technical assistance activities associated with CTPL products and services. The solution is intended to help support teams manage communication workflows and coordinate customer interactions in an organized manner. It contributes to a structured service environment in which product enquiries, technical assistance requirements and customer support activities can be handled through established operational processes.',
    source: 'https://containe.in/services/',
    image: '/assets/images/ctpl-dialer.png'
  },

  // 7. VLTD STATE INTEGRATIONS
  {
    slug: 'vltd',
    title: 'VLTD State Integrations',
    group: 'Services',
    eyebrow: 'Government integrations',
    summary:
      'CTPL VLTD State Integrations services focus on the coordination of AIS-140 Vehicle Location Tracking Device requirements across government and departmental applications. These services relate to transport, mining and other sectors where vehicle tracking information is integrated with relevant operational systems. The integration framework supports the needs of organizations and authorized stakeholders working with state-level vehicle monitoring requirements, subject to the applicable technical specifications and approvals.',
    source: 'https://containe.in/vltd/',
    image: '/assets/images/vltd-service.jpg',
    bullets: [
      'Mining: Andhra Pradesh, Telangana and Rajasthan',
      'Transport: Delhi, Himachal Pradesh, Kerala, Karnataka, Ladakh, Madhya Pradesh, Maharashtra, Nagaland, Odisha, Punjab, Tripura, Tamil Nadu, Uttarakhand, Uttar Pradesh and West Bengal',
      'Food Corporation: West Bengal',
      'State backend links and portal access must be checked individually before migration.'
    ]
  },

  // 8. SLD SERVICES
  {
    slug: 'sld',
    title: 'SLD Services',
    group: 'Services',
    eyebrow: 'Speed limiting devices',
    summary:
      'CTPL SLD Services are associated with the deployment and support of Speed Limiting Devices used in commercial vehicle applications. These services address operational requirements surrounding speed management technology, including device-related assistance and service coordination. The objective is to support customers, dealers and fleet operators in managing their speed limiting device requirements through an organized technical service ecosystem.',
    source: 'https://containe.in/sld/',
    image: '/assets/images/sld-service.jpg'
  }
];

/* =========================================
   ABOUT, INVESTORS, DEALER & CUSTOMER
   ========================================= */

export const corporate: ContentPage[] = [

  // ABOUT - OUR STORY
  {
    slug: 'our-story',
    title: 'Our Story',
    group: 'About',
    eyebrow: 'About Containe',
    summary:
      'CTPL designs IoT and M2M solutions for safer roads, protecting people through standardized automotive safety technology.',
    image: '/assets/images/our-story.jpg',
    source: 'https://containe.in/our-story/',
    bullets: [
      'Founded in 2008; ISO 9001:2015 quality-management certification',
      'Mission: target of one million IoT device installations in India by 2030',
      'Vision: globally reliable IoT/M2M vehicle road-safety and security manufacturing',
      'Support ecosystem, in-house R&D, software engineering and pan-India dealer footprint',
      'Company statements and figures require TL verification before publication.'
    ]
  },

  // ABOUT - VISION AND MISSION
  {
    slug: 'vision-mission-values',
    title: 'Vision, Mission & Values',
    group: 'About',
    eyebrow: 'What drives CTPL',
    summary:
      'CTPL aims to make mobility safer through standardized technology, people-first service and responsible innovation.',
    image: '/assets/images/vision-mission.jpg',
    source: 'https://containe.in/our-story/',
    bullets: [
      'Vision: reliable road-safety and security solutions that meet automotive standards',
      'Mission: one million IoT device installations in India by 2030',
      'Values: ethics, empathy, quality, and a positive work ecosystem'
    ]
  },

  // ABOUT - INFRASTRUCTURE
  {
    slug: 'strength-infrastructure',
    title: 'Strength & Infrastructure',
    group: 'About',
    eyebrow: 'How we operate',
    summary:
      'Operational excellence supported by technical assistance, digital ERP, quality processes, testing and engineering.',
    image: '/assets/images/infrastructure.jpg',
    source: 'https://containe.in/our-story/',
    bullets: [
      'Customer care and technical support',
      'Enterprise resource planning and traceable operations',
      'AIS, BIS and ISO 9001:2015 standards',
      'In-house R&D and software development'
    ]
  },

  // ABOUT - MARKET PRESENCE
  {
    slug: 'market-presence',
    title: 'Market Presence',
    group: 'About',
    eyebrow: 'Deployment network',
    summary:
      'CTPL describes a nationwide distribution and service footprint for SLD and VLTD products.',
    image: '/assets/images/market-presence.jpg',
    source: 'https://containe.in/our-story/',
    bullets: [
      'Pan-India authorized dealers and service centres',
      'Government and departmental VLTD integrations',
      'International markets named on corporate website include Singapore, Malaysia, Philippines, Mauritius, Europe, Dubai and Africa'
    ]
  },

  /* =========================================
     INVESTOR RELATIONS
     ========================================= */

  {
    slug: 'corporate-information',
    title: 'Corporate Information',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'Corporate profile, management and statutory information.',
    source: 'https://containe.in/Corporate%20Information/'
  },

  {
    slug: 'corporate-governance',
    title: 'Corporate Governance',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'Governance records, policies, and investor-facing company disclosures.',
    source: 'https://containe.in/corporate-governance/'
  },

  {
    slug: 'ipo',
    title: 'Initial Public Offer (IPO)',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'IPO-related documents and disclosures, including the prospectus.',
    source: 'https://containe.in/initial-public-offer-ipo/'
  },

  {
    slug: 'rights-issue',
    title: 'Rights Issue',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'Rights issue communications and related investor documents.',
    source: 'https://containe.in/rights-issue/'
  },

  {
    slug: 'results-reports',
    title: 'Results & Reports',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'Financial results, statutory filings and annual reports. Preserve original download files and reporting periods.',
    source: 'https://containe.in/results-reports/'
  },

  {
    slug: 'shareholdings',
    title: 'Shareholdings',
    group: 'Investors',
    eyebrow: 'Investor relations',
    summary:
      'Shareholding pattern and regulatory disclosures. Show reporting dates and retain underlying filings.',
    source: 'https://containe.in/shareholdings/'
  },

  /* =========================================
     DEALER CENTRE
     ========================================= */

  
{
  slug: 'rfc-service-centres',
  title: 'RFC / Service Centres',
  group: 'Dealer Centre',
  eyebrow: 'Find support',
  summary:
    'Authorized service locations, dealer servicing and RFC centre information.',
  source: 'https://containe.in/rfc-service-centers/',
  image: '/assets/images/rfc-service-centres.png'
},


  {
    slug: 'dealer-enquiry',
    title: 'Dealer Enquiry',
    group: 'Dealer Centre',
    eyebrow: 'Dealer support',
    summary:
      'Dealer enquiry and service support journey.',
    source: 'https://containe.in/dealer-enquiry/'
  },

  {
    slug: 'tranopro-sms-commands',
    title: 'TRANO PRO VLTD SMS Commands',
    group: 'Dealer Centre',
    eyebrow: 'Device assistance',
    summary:
      'SMS commands and support resources for authorized TRANO PRO VLTD users.',
    source: 'https://containe.in/trano-pro-vltd-sms-commands/'
  },

  {
    slug: 'vltd-data-validity',
    title: 'VLTD Data Validity',
    group: 'Dealer Centre',
    eyebrow: 'Recharge and status',
    summary:
      'VLT device recharge and data-validity service.',
    source:
      'https://containe.in/vlt-device-recharge-data-validity/'
  },

  {
    slug: 'esim-validity',
    title: 'E-SIM Validity',
    group: 'Dealer Centre',
    eyebrow: 'Connectivity status',
    summary:
      'Embedded SIM validity and service resources.',
    source: 'https://containe.in/e-sim-validity/'
  },

  {
    slug: 'approvals-sop',
    title: 'Approvals & SOP',
    group: 'Dealer Centre',
    eyebrow: 'Documentation',
    summary:
      'Approvals and operating procedures for dealer/device support.',
    source: 'https://containe.in/approvals-sop/'
  },

  /* =========================================
     CUSTOMER CENTRE
     ========================================= */

  {
    slug: 'customer-centre',
    title: 'Customer Centre',
    group: 'Customer Centre',
    eyebrow: 'Help and service',
    summary:
      'Customer service, device support, resources and assistance.',
    source: 'https://containe.in/customer-centre/',
    note:
      'Original customer-centre URL displayed unrelated shopping content during review. Verify it before reconnecting.'
  },

  /* =========================================
     CONTACT
     ========================================= */

  {
    slug: 'contact',
    title: 'Contact CTPL',
    group: 'Contact',
    eyebrow: 'Let’s talk',
    summary:
      'Get in touch with the Containe Technologies Limited team about products, distribution and technical support.',
    source: 'https://containe.in/'
  }
];

/* =========================================
   COMPLETE PAGE COLLECTION
   ========================================= */

export const pages: ContentPage[] = [
  ...corporate,
  ...products,
  ...services
];

/* =========================================
   WEBSITE NAVIGATION
   ========================================= */

export const groups = [
  {
    label: 'About',
    links: [
      'our-story',
      'vision-mission-values',
      'strength-infrastructure',
      'market-presence'
    ]
  },

  {
    label: 'Products',
    links: products.map(p => p.slug)
  },

  {
    label: 'Services',
    links: services.map(p => p.slug)
  },

  {
    label: 'Investors',
    links: [
      'corporate-information',
      'corporate-governance',
      'ipo',
      'rights-issue',
      'results-reports',
      'shareholdings'
    ]
  },

  {
    label: 'Dealer Centre',
    links: [
      'rfc-service-centres',
      'dealer-enquiry',
      'tranopro-sms-commands',
      'vltd-data-validity',
      'esim-validity',
      'approvals-sop'
    ]
  },

  {
    label: 'Customer Centre',
    links: [
      'customer-centre'
    ]
  }
];
