
import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-convertz',
  standalone: true,
  templateUrl: './mis.html',
  styleUrl: './mis.css'
})
export class MisConvertzComponent {

  title = 'MIS · CONVERTZ';

  eyebrow = 'INSTALLATION MANAGEMENT';

  summary = `MIS · CONVERTZ is a management information system focused on device installations and renewal-related activities. It supports the organization of operational information used by teams responsible for managing these processes. By bringing installation and renewal records into a structured workflow, the platform is intended to improve visibility, coordination and consistency across service activities, helping businesses manage recurring administrative and operational requirements more efficiently.`;

  image = '/assets/images/mis-convertz.jpg';

  source = 'https://containe.in/services/';
}
