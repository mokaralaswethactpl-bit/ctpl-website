
import { Component } from '@angular/core';

@Component({
  selector: 'app-trano',
  standalone: true,
  templateUrl: './trano.html',
  styleUrl: './trano.scss'
})
export class TranoComponent {

  title = 'TRANO';

  eyebrow = 'VTS TRACKING';

  summary = `TRANO is a vehicle tracking platform designed to support connected mobility and fleet monitoring operations. It helps organizations manage vehicle-related information through a centralized digital environment, providing better visibility into day-to-day fleet activities. The platform supports the operational needs of businesses that depend on vehicle tracking technology, helping improve coordination, monitoring efficiency and access to information for transport and fleet management teams.`;

  image = '/assets/images/trano.jpg';

  source = 'https://containe.in/services/';
}
