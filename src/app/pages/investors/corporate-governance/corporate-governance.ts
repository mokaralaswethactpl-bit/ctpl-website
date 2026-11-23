
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corporate-governance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './corporate-governance.html',
  styleUrl: './corporate-governance.css'
})
export class CorporateGovernanceComponent {

  activeTab = signal(0);

  tabs = [
    'Investor Information',
    'Share holding pattern',
    'Compliance Report on CG',
    'Investor Grievances Report'
  ];

}
