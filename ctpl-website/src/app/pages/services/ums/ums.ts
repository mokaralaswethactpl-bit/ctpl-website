
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ums',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './ums.html',
  styleUrl: './ums.scss'
})
export class UmisComponent {

  title = 'UMIS';

  fullTitle = 'Unified Management System';

  eyebrow = 'UNIFIED MANAGEMENT';

  summary = `UMIS is a unified management platform designed to support connected operations through a centralized approach to information and workflow management. It is intended to help organizations organize operational activities and improve coordination between processes that would otherwise require separate management efforts. By providing a common digital environment for relevant operational information, UMIS supports more structured monitoring, administrative efficiency and management oversight.`;

  image = 'assets/images/ums.jpg';

  source = 'https://containe.in/services/';

}
