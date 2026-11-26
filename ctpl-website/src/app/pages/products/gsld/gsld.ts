
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-geo-limits-gsld',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './gsld.html',
  styleUrl: './gsld.scss'
})
export class GeoLimitsGsldComponent {

  title = 'Geo-Limits · GSLD';

  eyebrow = 'GEO-FENCING SPEED MANAGEMENT';

  summary = `Geo-Limits GSLD is a vehicle speed management solution associated with geographical speed limiting applications. It is designed around the concept of location-based speed control, supporting different speed management requirements across defined geographical areas. The solution forms part of CTPL's vehicle safety and speed management product portfolio.`;

  image = '/assets/images/geo-limits-gsld.png';

}
