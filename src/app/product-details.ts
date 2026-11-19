
export interface ProductDetails {
  subtitle: string;
  overview: string[];
  features: string[];
  applications: string[];
  note?: string;
}

export const productDetails: Record<string, ProductDetails> = {

  motoreye: {
    subtitle: 'Electronic Fuel Regulator (EFRT) | AIS-018',

    overview: [
      'MotorEye is an electronic speed-limiting solution designed for compatible vehicles. Its purpose is to help prevent a vehicle from exceeding a predefined maximum speed.',

      'The Electronic Fuel Regulator controls vehicle speed by regulating the fuel supplied to the engine according to the measured vehicle speed.',

      'This technology supports safer driving practices and helps commercial transport operators manage overspeeding. The device limits maximum speed rather than functioning as cruise control.'
    ],

    features: [
      'Electronic regulation of maximum vehicle speed',
      'Fuel-flow-based speed limitation',
      'Designed for straightforward installation',
      'Supports road safety and speed compliance',
      'Helps reduce unnecessary overspeeding',
      'Designed for commercial vehicle applications'
    ],

    applications: [
      'Commercial goods vehicles',
      'Public transport vehicles',
      'School and institutional transport',
      'Compatible commercial vehicle fleets',
      'Transport operators requiring speed limitation'
    ]
  },

  limits: {
    subtitle: 'Electronic Pedal Interface (EPI) | AIS-018',

    overview: [
      'Limits EPI is an electronic speed-limiting system intended for vehicles that use an electronic accelerator pedal.',

      'The device monitors the accelerator pedal signal and communicates an adjusted signal to the vehicle Engine Control Module (ECM).',

      'When the vehicle approaches or exceeds its configured maximum speed, the system controls the accelerator-related signal to help keep the vehicle within the selected speed limit.'
    ],

    features: [
      'Electronic accelerator pedal interface',
      'Speed limitation through signal management',
      'Interaction with compatible vehicle ECM systems',
      'Preconfigured speed-limit operation',
      'Supports commercial vehicle speed management',
      'Electronic speed regulation'
    ],

    applications: [
      'Vehicles using electronic accelerator pedals',
      'Commercial transport operations',
      'School and passenger transport',
      'Compatible goods carriers',
      'Fleet speed-management programmes'
    ]
  },

  geolimits: {
    subtitle: 'Geo-Limits | Geographic Speed Management',

    overview: [
      'Geo-Limits is presented within the CTPL product portfolio as a geographic speed-management solution.',

      'Geographic speed management uses vehicle location and defined operating areas as inputs for applying location-related speed policies.',

      'Exact CTPL Geo-Limits device functions, vehicle compatibility, supported zones and configuration options should be confirmed using its official technical documentation.'
    ],

    features: [
      'Geographic speed-management concept',
      'Location-based operating areas',
      'Potential application in designated speed zones',
      'Designed for location-aware vehicle safety solutions'
    ],

    applications: [
      'Industrial premises',
      'Designated transport zones',
      'Restricted-speed operating areas',
      'Managed commercial vehicle operations'
    ],

    note: 'Detailed device features and approvals require confirmation against the official CTPL Geo-Limits datasheet.'
  },

  ais140: {
    subtitle: 'Vehicle Location Tracking Device | AIS-140 / IS 16833',

    overview: [
      'CTPL develops vehicle location tracking technology for connected vehicle monitoring and safety applications.',

      'Vehicle location tracking devices use satellite positioning and cellular communication to provide vehicle location data to authorised monitoring systems.',

      'CTPL company documentation describes its IRNSS-enabled vehicle tracking technology with GPS/IRNSS positioning, GSM/GPRS communication and remote device configuration.',

      'The company has also documented TRANOPRO tracking equipment with an SOS panic switch for emergency-related applications.'
    ],

    features: [
      'GPS/IRNSS-based vehicle location information',
      'GSM/GPRS communication',
      'Remote configuration support',
      'Vehicle monitoring and tracking',
      'Present and historical location information',
      'SOS panic-switch integration on applicable models',
      'Support for connected transport safety applications'
    ],

    applications: [
      'Public passenger transport',
      'Commercial fleets',
      'School transportation',
      'Passenger safety monitoring',
      'Vehicle location monitoring',
      'Transport operations and reporting'
    ],

    note: 'Exact specifications, current approvals and supported features depend on the CTPL device model and applicable certification.'
  },

  esim: {
    subtitle: 'Embedded SIM | IoT & M2M Connectivity',

    overview: [
      'An embedded SIM is a SIM technology integrated into a connected device rather than relying exclusively on a removable SIM card.',

      'Embedded SIM technology supports connectivity in vehicle trackers, industrial equipment and other Internet of Things devices where reliability, size and device accessibility are important.',

      'CTPL has described dual-profile e-SIM manufacturing and associated M2M connectivity services in its corporate documents.',

      'Embedded SIM solutions can reduce the need for physical SIM replacement and support network profile management, subject to device and operator capabilities.'
    ],

    features: [
      'Embedded cellular connectivity',
      'Applications in IoT and M2M devices',
      'Support for connected vehicle equipment',
      'Reduced physical SIM replacement requirements',
      'Dual-profile capability in applicable solutions',
      'Connectivity management for distributed devices'
    ],

    applications: [
      'Vehicle location tracking devices',
      'IoT monitoring equipment',
      'Industrial connected devices',
      'M2M communications',
      'Telematics applications',
      'Connected fleet technology'
    ]
  },

  rfid: {
    subtitle: 'Trano RFID | Identification Technology',

    overview: [
      'Trano RFID is included in the CTPL product portfolio as an RFID-related technology solution.',

      'Radio Frequency Identification (RFID) is a technology for identifying tagged objects or credentials using radio communication between compatible tags and readers.',

      'RFID technology can support identification and operational workflows. The specific Trano RFID implementation, supported readers, tag types and software integrations require confirmation from CTPL documentation.'
    ],

    features: [
      'RFID-based identification concept',
      'Contactless tag reading',
      'Identification workflow applications',
      'Potential integration with compatible systems'
    ],

    applications: [
      'Vehicle identification workflows',
      'Asset identification',
      'Access and operational workflows',
      'Fleet and transport-related identification'
    ],

    note: 'Confirm supported RFID technologies, product capabilities and applications with the official Trano RFID documentation.'
  }

};

export function findProductDetails(
  title: string
): ProductDetails | undefined {

  const name = title.toLowerCase();

  if (name.includes('motoreye') || name.includes('efrt')) {
    return productDetails['motoreye'];
  }

  if (name.includes('geo-limits') || name.includes('gsld')) {
    return productDetails['geolimits'];
  }

  if (name.includes('limits') || name.includes('epi')) {
    return productDetails['limits'];
  }

  if (
    name.includes('ais-140') ||
    name.includes('16833') ||
    name.includes('vltd')
  ) {
    return productDetails['ais140'];
  }

  if (name.includes('e-sim') || name.includes('esim')) {
    return productDetails['esim'];
  }

  if (name.includes('rfid')) {
    return productDetails['rfid'];
  }

  return undefined;
}
