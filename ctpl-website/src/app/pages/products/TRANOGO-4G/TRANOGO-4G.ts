
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tranogo-4g',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './TRANOGO-4G.html',
  styleUrl: './TRANOGO-4G.scss'
})
export class Tranogo4gComponent {

  title = 'TRANO GO 4G';

  eyebrow = 'SMART VEHICLE TRACKING SYSTEM';

  summary =
    'Compact, feature-rich AIS-140 compliant LTE CAT1 smart vehicle tracker with advanced 4G connectivity and intelligent fleet monitoring.';

  image = 'assets/images/tranogo-4g.png';

}
