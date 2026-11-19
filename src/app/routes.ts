
import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DetailComponent } from './detail.component';

import { CorporateInformationComponent } from './corporate-information.component';
import { CorporateGovernanceComponent } from './corporate-governance.component';
import { IPOComponent } from './ipo.component';
import { RightsIssueComponent } from './rights-issue.component';
import { ResultsReportsComponent } from './results-reports.component';
import { ShareholdingsComponent } from './shareholdings.component';

import { DealerEnquiryComponent } from './dealer-enquiry.component';
import { TranoproSmsCommandsComponent } from './tranopro-sms-commands.component';
import { VltdDataValidityComponent } from './vltd-data-validity.component';
import { EsimValidityComponent } from './esim-validity.component';
import { ApprovalsSopComponent } from './approvals-sop.component';

import { CareersComponent } from './careers.component';
import { BlogsComponent } from './blogs.component';
import { VltdComponent } from './vltd.component';
import { CustomerCentreComponent } from './customer-centre.component';

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
    path: 'page/dealer-enquiry',
    component: DealerEnquiryComponent
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
  path: 'page/vltd',
  component: VltdComponent
},
  {
    path: 'page/:slug',
    component: DetailComponent
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
