
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DealerService {
  number: string;
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-dealer-centre',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dealer-centre.html',
  styleUrl: './dealer-centre.scss'
})
export class DealerCentreComponent {

  dealerServices: DealerService[] = [

    {
      number: '01',
      title: 'Dealer Enquiry',
      description:
        'Explore dealership opportunities, channel partnerships, onboarding requirements and collaboration with CTPL.',
      route: '/page/dealer-enquiry',
      icon: '🤝'
    },

    {
      number: '02',
      title: 'VLTD Data Validity',
      description:
        'Find information about VLT device data validity, recharge requirements, renewal guidance and connectivity support.',
      route: '/page/vltd-data-validity',
      icon: '📡'
    },

    {
      number: '03',
      title: 'E-SIM Validity',
      description:
        'Explore e-SIM validity, profile activation, network connectivity and profile management information.',
      route: '/page/esim-validity',
      icon: '📶'
    },

    {
      number: '04',
      title: 'TRANO PRO SMS Commands',
      description:
        'Access the TRANO PRO VLTD SMS command reference for device status, location data and configuration information.',
      route: '/page/tranopro-sms-commands',
      icon: '💬'
    },

    {
      number: '05',
      title: 'Approvals & SOP',
      description:
        'Explore state-wise approvals, standard operating procedures and available technical documentation.',
      route: '/page/approvals-sop',
      icon: '📄'
    },

    {
      number: '06',
      title: 'RFC / Service Centres',
      description:
        'Find information about authorized service centres, dealer support and technical assistance resources.',
      route: '/page/rfc-service-centres',
      icon: '🛠️'
    }

  ];

}
