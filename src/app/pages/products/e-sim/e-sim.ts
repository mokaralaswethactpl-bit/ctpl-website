
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-embedded-esim',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './e-sim.html',
  styleUrl: './e-sim.scss'
})
export class EmbeddedEsimComponent {

  title = 'Embedded e-SIM';

  eyebrow = 'IOT CONNECTIVITY';

  summary = `Embedded e-SIM technology supports connectivity for compatible connected devices. It provides a digital SIM-based approach to device connectivity, helping support communication between devices and relevant digital platforms. It forms part of CTPL's connected mobility and IoT technology portfolio.`;

  image = '/assets/images/embedded-esim.png';

}
