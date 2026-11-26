
import {
  Component,
  computed,
  signal
} from '@angular/core';

import { RouterLink } from '@angular/router';

type StateDocument = {
  title: string;
  url: string;
};

@Component({
  selector: 'app-approvals-sop',
  standalone: true,
  imports: [RouterLink],

  templateUrl: './approvals.html',
  styleUrl: './approvals.scss'
})
export class ApprovalsSopComponent {

  /* =====================================
     SELECTED STATE
  ===================================== */

  selectedState = signal<string | null>(null);

  /* =====================================
     AVAILABLE STATES
  ===================================== */

  states: string[] = [
    'Andhra Pradesh',
    'Delhi',
    'Karnataka',
    'Kerala',
    'Ladakh',

    'Gujarat',
    'Himachal Pradesh',
    'Madhya Pradesh',
    'Maharashtra',
    'Nagaland',

    'Jammu & Kashmir',
    'Odisha',
    'Rajasthan',
    'Telangana',
    'Tripura',

    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Goa',
    'Punjab',

    'Haryana',
    'Assam',
    'Tamil Nadu',
    'Jharkhand',
    'Bihar'
  ];

  /* =====================================
     STATE-WISE DOCUMENTS

     Add approved PDF links when available.
  ===================================== */

  documentsByState: Record<string, StateDocument[]> = {};

  /* =====================================
     SELECTED DOCUMENTS
  ===================================== */

  selectedDocuments = computed(() => {

    const state = this.selectedState();

    if (!state) {
      return [];
    }

    return this.documentsByState[state] ?? [];

  });

  /* =====================================
     SELECT A STATE
  ===================================== */

  selectState(state: string): void {
    this.selectedState.set(state);
  }

}
