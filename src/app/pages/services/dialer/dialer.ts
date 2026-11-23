
import { Component } from '@angular/core';

@Component({
  selector: 'app-ctpl-dialer',
  standalone: true,
  templateUrl: './dialer.html',
  styleUrl: './dialer.scss'
})
export class CtplDialerComponent {

  title = 'CTPL Dialer';

  eyebrow = 'CUSTOMER SUPPORT';

  summary = `CTPL Dialer supports customer communication and technical assistance activities associated with CTPL products and services. The solution is intended to help support teams manage communication workflows and coordinate customer interactions in an organized manner. It contributes to a structured service environment in which product enquiries, technical assistance requirements and customer support activities can be handled through established operational processes.`;

  image = '/assets/images/ctpl-dialer.png';

  source = 'https://containe.in/services/';
}
