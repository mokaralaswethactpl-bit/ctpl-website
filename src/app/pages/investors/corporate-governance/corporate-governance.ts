
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corporate-governance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './corporate-governance.html',
  styleUrl: './corporate-governance.scss'
})
export class CorporateGovernanceComponent {

  // Currently selected tab
  activeTab = signal(0);

  // Corporate Governance tabs
  tabs = [
    'Investor Information',
    'Share holding pattern',
    'Compliance Report on CG',
    'Investor Grievances Report'
  ];

  // Change active tab when clicked
  selectTab(index: number) {
    this.activeTab.set(index);
  }

}
