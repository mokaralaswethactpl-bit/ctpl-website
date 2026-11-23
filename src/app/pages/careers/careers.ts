
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './careers.html',
  styleUrl: './careers.scss'
})
export class CareersComponent {

  /* =====================================
     CAREER AREAS
  ===================================== */

  careerAreas = [
    {
      icon: '⌘',
      title: 'Embedded Systems & R&D',
      description:
        'Explore engineering disciplines connected to embedded devices, electronic systems and technology development.'
    },

    {
      icon: '▣',
      title: 'Software Development',
      description:
        'Explore software platforms, applications and digital solutions supporting connected mobility.'
    },

    {
      icon: '⚙',
      title: 'Production & Quality',
      description:
        'Explore manufacturing operations, testing processes and product quality activities.'
    },

    {
      icon: '◎',
      title: 'Technical Support',
      description:
        'Explore technical assistance, diagnostics, device servicing and support operations.'
    },

    {
      icon: '↗',
      title: 'Sales & Business Development',
      description:
        'Explore customer relationships, dealer coordination and business development activities.'
    },

    {
      icon: '◈',
      title: 'Operations & Administration',
      description:
        'Explore business operations, coordination and administrative functions.'
    }
  ];

  /* =====================================
     SCROLL TO CAREER OPPORTUNITIES
  ===================================== */

  scrollToOpportunities(event: Event): void {
    event.preventDefault();

    document
      .getElementById('career-opportunities')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }

}
