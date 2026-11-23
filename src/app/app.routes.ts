
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';

import { CorporateInformationComponent } from './pages/investors/corporate-information/corporate-information';
import { CorporateGovernanceComponent } from './pages/investors/corporate-governance/corporate-governance';
import { IPOComponent } from './pages/investors/ipo/ipo';
import { RightsIssueComponent } from './pages/investors/rights-issue/rights-issue';
import { ResultsReportsComponent } from './pages/investors/results/results';
import { ShareholdingsComponent } from './pages/investors/shareholdings/shareholdings';


import { AboutComponent } from './pages/about/about';
import { OurStoryComponent } from './pages/about/our-story/our-story';
import { VisionComponent } from './pages/about/vision/vision';
import { StrengthComponent } from './pages/about/strength/strength';
import { MarketPresenceComponent } from './pages/about/market-presence/market-presence';


import { RfcServiceCentresComponent } from './pages/dealer-centre/rfc/rfc';
import { DealerEnquiryComponent } from './pages/dealer-centre/dealer-enquiry/dealer-enquiry';
import { TranoproSmsCommandsComponent } from './pages/dealer-centre/sms-commands/sms-commands';
import { VltdDataValidityComponent } from './pages/dealer-centre/vlt-data-validity/vlt-data-validity';
import { EsimValidityComponent } from './pages/dealer-centre/esim-validity/esim-validity';
import { ApprovalsSopComponent } from './pages/dealer-centre/approvals/approvals';

import { CareersComponent } from './pages/careers/careers';
import { BlogsComponent } from './pages/blogs/blogs';
import { CustomerCentreComponent } from './pages/customer-centre/customer-centre';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  {
    path: 'page/dealer-enquiry',
    component: DealerEnquiryComponent
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
  {
    path: 'page/esim-validity',
    component: EsimValidityComponent
  },
  {
    path: 'page/approvals-sop',
    component: ApprovalsSopComponent
  },

  {
    path: 'page/customer-centre',
    component: CustomerCentreComponent
  },
  
  

{
  path: 'careers',
  component: CareersComponent
},

{
  path: 'blogs',
  component: BlogsComponent
},

  {
    path: '**',
    redirectTo: ''
  }
];
