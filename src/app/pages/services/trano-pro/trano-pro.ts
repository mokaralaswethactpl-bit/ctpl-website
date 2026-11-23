
import { Component } from '@angular/core';

@Component({
  selector: 'app-tranopro',
  standalone: true,
  templateUrl: './trano-pro.html',
  styleUrl: './trano-pro.scss'
})
export class TranoproComponent {

  title = 'TRANOPRO';

  eyebrow = 'AIS-140 TRACKING';

  summary = `TRANOPRO is a tracking platform developed to support vehicle location tracking devices associated with AIS-140 applications. It provides a digital environment for managing vehicle tracking information and monitoring connected transport operations. Designed for organizations working with commercial and regulated vehicle fleets, TRANOPRO helps bring vehicle-related information into an organized platform for operational oversight, reporting workflows and day-to-day tracking requirements.`;

  image = '/assets/images/tranopro-service.jpg';

  source = 'https://containe.in/services/';
}
