
import { Routes } from '@angular/router';

// HOME
import { HomeComponent } from './pages/home/home';

// ABOUT
import { AboutComponent } from './pages/about/about';
import { OurStoryComponent } from './pages/about/our-story/our-story';
import { VisionComponent } from './pages/about/vision/vision';
import { StrengthComponent } from './pages/about/strength/strength';
import { MarketPresenceComponent } from './pages/about/market-presence/market-presence';

// PRODUCTS
import { Products } from './pages/products/products';
import { Ais140Is16833Component } from './pages/products/ais/ais';
import { EmbeddedEsimComponent } from './pages/products/e-sim/e-sim';
import { GeoLimitsGsldComponent } from './pages/products/gsld/gsld';
import { LimitsEpiComponent } from './pages/products/limits/limits';
import { MotoreyeEfrtComponent } from './pages/products/motoreye/motoreye';
import { TranoRfidComponent } from './pages/products/rfid/rfid';

// SERVICES
import { Services } from './pages/services/services';
import { TranoComponent } from './pages/services/trano/trano';
import { TranoproComponent } from './pages/services/trano-pro/trano-pro';
import { CtplErpComponent } from './pages/services/erp/erp';
import { MisConvertzComponent } from './pages/services/mis/mis';
import { UmisComponent } from './pages/services/ums/ums';
import { CtplDialerComponent } from './pages/services/dialer/dialer';
import { VltdComponent } from './pages/services/vltd/vltd';
import { SldComponent } from './pages/services/sld/sld';

// INVESTORS
import { Investors } from './pages/investors/investors';
import { CorporateInformationComponent } from './pages/investors/corporate-information/corporate-information';
import { CorporateGovernanceComponent } from './pages/investors/corporate-governance/corporate-governance';
import { IPOComponent } from './pages/investors/ipo/ipo';
import { RightsIssueComponent } from './pages/investors/rights-issue/rights-issue';
import { ResultsReportsComponent } from './pages/investors/results/results';
import { ShareholdingsComponent } from './pages/investors/shareholdings/shareholdings';

// DEALER CENTRE
import { DealerCentreComponent } from './pages/dealer-centre/dealer-centre';
import { RfcServiceCentresComponent } from './pages/dealer-centre/rfc/rfc';
import { DealerEnquiryComponent } from './pages/dealer-centre/dealer-enquiry/dealer-enquiry';
import { TranoproSmsCommandsComponent } from './pages/dealer-centre/sms-commands/sms-commands';
import { VltdDataValidityComponent } from './pages/dealer-centre/vlt-data-validity/vlt-data-validity';
import { EsimValidityComponent } from './pages/dealer-centre/esim-validity/esim-validity';
import { ApprovalsSopComponent } from './pages/dealer-centre/approvals/approvals';

// CUSTOMER CENTRE
import { CustomerCentreComponent } from './pages/customer-centre/customer-centre';

// OTHER PAGES
import { CareersComponent } from './pages/careers/careers';
import { BlogsComponent } from './pages/blogs/blogs';


export const routes: Routes = [

  // HOME
  {
    path: '',
    component: HomeComponent
  },


  // =========================================
  // ABOUT
  // =========================================

  {
    path: 'page/about',
    component: AboutComponent
  },
  {
    path: 'page/our-story',
    component: OurStoryComponent
  },
  {
    path: 'page/vision-mission-values',
    component: VisionComponent
  },
  {
    path: 'page/strength-infrastructure',
    component: StrengthComponent
  },
  {
    path: 'page/market-presence',
    component: MarketPresenceComponent
  },


  // =========================================
  // PRODUCTS
  // =========================================

  {
    path: 'products',
    component: Products
  },
  {
    path: 'products/ais',
    component: Ais140Is16833Component
  },
  {
    path: 'products/e-sim',
    component: EmbeddedEsimComponent
  },
  {
    path: 'products/gsld',
    component: GeoLimitsGsldComponent
  },
  {
    path: 'products/limits',
    component: LimitsEpiComponent
  },
  {
    path: 'products/motoreye',
    component: MotoreyeEfrtComponent
  },
  {
    path: 'products/rfid',
    component: TranoRfidComponent
  },


  // =========================================
  // SERVICES
  // =========================================

  {
    path: 'services',
    component: Services
  },
  {
    path: 'services/trano',
    component: TranoComponent
  },
  {
    path: 'services/trano-pro',
    component: TranoproComponent
  },
  {
    path: 'services/erp',
    component: CtplErpComponent
  },
  {
    path: 'services/mis',
    component: MisConvertzComponent
  },
  {
    path: 'services/ums',
    component: UmisComponent
  },
  {
    path: 'services/dialer',
    component: CtplDialerComponent
  },
  {
    path: 'services/vltd',
    component: VltdComponent
  },
  {
    path: 'services/sld',
    component: SldComponent
  },


  // =========================================
  // INVESTORS
  // =========================================

  {
    path: 'page/investors',
    component: Investors
  },
  {
    path: 'page/corporate-information',
    component: CorporateInformationComponent
  },
  {
    path: 'page/corporate-governance',
    component: CorporateGovernanceComponent
  },
  {
    path: 'page/ipo',
    component: IPOComponent
  },
  {
    path: 'page/rights-issue',
    component: RightsIssueComponent
  },
  {
    path: 'page/results-reports',
    component: ResultsReportsComponent
  },
  {
    path: 'page/shareholdings',
    component: ShareholdingsComponent
  },


  // =========================================
  // DEALER CENTRE
  // =========================================

  {
    path: 'page/dealer-centre',
    component: DealerCentreComponent
  },
  {
    path: 'page/approvals-sop',
    component: ApprovalsSopComponent
  },
  {
    path: 'page/dealer-enquiry',
    component: DealerEnquiryComponent
  },
  {
    path: 'page/esim-validity',
    component: EsimValidityComponent
  },
  {
    path: 'page/rfc',
    component: RfcServiceCentresComponent
  },
  {
    path: 'page/tranopro-sms-commands',
    component: TranoproSmsCommandsComponent
  },
  {
    path: 'page/vltd-data-validity',
    component: VltdDataValidityComponent
  },


  // =========================================
  // CUSTOMER CENTRE
  // =========================================

  {
    path: 'page/customer-centre',
    component: CustomerCentreComponent
  },


  // =========================================
  // CAREERS & BLOGS
  // =========================================

  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },


  // =========================================
  // FALLBACK
  // =========================================

  {
    path: '**',
    redirectTo: ''
  }

];
