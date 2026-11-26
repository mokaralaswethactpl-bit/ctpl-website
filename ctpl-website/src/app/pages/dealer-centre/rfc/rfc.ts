
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { pages } from '../../../content';
import { RevealDirective } from '../../../reveal.directive';

@Component({
  selector: 'app-rfc-service-centres',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './rfc.html',
  styleUrl: './rfc.scss'
})
export class RfcServiceCentresComponent {

  page = pages.find(
    p => p.slug === 'rfc-service-centres'
  );

  /* =====================================
     SERVICE & TECHNICAL ASSISTANCE
  ===================================== */

  supportItems = [

    {
      icon: '⚙',
      title: 'Installation Assistance',
      description:
        'Support for product installation and device configuration.'
    },

    {
      icon: '◈',
      title: 'Maintenance Services',
      description:
        'Assistance with maintenance and servicing of CTPL devices.'
    },

    {
      icon: '◎',
      title: 'Product Diagnostics',
      description:
        'Technical checks and troubleshooting for supported products.'
    },

    {
      icon: '◇',
      title: 'Technical Support',
      description:
        'Guidance for customers and partners with technical enquiries.'
    }

  ];

}
