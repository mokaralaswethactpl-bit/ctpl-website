
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-limits-epi',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './limits.html',
  styleUrl: './limits.scss'
})
export class LimitsEpiComponent {

  title = 'Limits · EPI';

  eyebrow = 'ELECTRONIC PEDAL INTERFACE';

  summary = `Limits EPI is an electronic pedal interface solution associated with vehicle speed limiting applications. It is designed to support speed management requirements through an electronic interface with the vehicle's accelerator pedal system. The solution forms part of CTPL's vehicle safety and speed management product portfolio.`;

  image = 'assets/images/limits-epi.png';

  source = 'https://containe.in/';

}
