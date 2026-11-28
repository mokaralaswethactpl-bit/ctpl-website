
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sld',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './sld.html',
  styleUrl: './sld.scss'
})
export class SldComponent {

  title = 'SLD Services';

  eyebrow = 'SPEED LIMITING DEVICES';

  summary = `CTPL SLD Services are associated with the deployment and support of Speed Limiting Devices used in commercial vehicle applications. These services address operational requirements surrounding speed management technology, including device-related assistance and service coordination. The objective is to support customers, dealers and fleet operators in managing their speed limiting device requirements through an organized technical service ecosystem.`;

  image = 'assets/images/sld-service.jpg';

  source = 'https://containe.in/sld/';

}
