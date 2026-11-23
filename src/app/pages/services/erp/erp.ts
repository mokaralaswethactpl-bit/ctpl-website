
import { Component } from '@angular/core';

@Component({
  selector: 'app-ctpl-erp',
  standalone: true,
  templateUrl: './erp.html',
  styleUrl: './erp.scss'
})
export class CtplErpComponent {

  title = 'CTPL ERP';

  eyebrow = 'BUSINESS SYSTEMS';

  summary = `CTPL ERP is an enterprise resource planning solution intended to support business processes associated with Speed Limiting Devices and Vehicle Location Tracking Devices. It brings operational activities into a structured digital environment, helping teams coordinate information across device-related workflows and business functions. The system is positioned to assist with organizational efficiency, information management and coordination between departments involved in connected mobility products and services.`;

  image = '/assets/images/ctpl-erp.jpg';

  source = 'https://containe.in/services/';
}
