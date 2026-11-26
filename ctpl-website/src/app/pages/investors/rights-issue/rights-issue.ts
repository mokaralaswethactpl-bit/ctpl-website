
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type RightsIssueItem = {
  title: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-rights-issue',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rights-issue.html',
  styleUrl: './rights-issue.scss'
})
export class RightsIssueComponent {

  // RIGHTS ISSUE PDF DOCUMENTS

  rightsItems: RightsIssueItem[] = [
    {
      title: 'DRAFT LETTER OF OFFER',
      description:
        'Containe Technologies Ltd - Rights Issued Draft Letter of Offer',
      url: '/assets/pdfs/rights-issue/draft-letter-of-offer.pdf'
    },
    {
      title: 'BOARD MEETING OUTCOME',
      description:
        'Containe Technologies Ltd - Rights Issued Board Meeting Outcome',
      url: '/assets/pdfs/rights-issue/board-meeting-outcome.pdf'
    },
    {
      title: 'LETTER OF OFFER',
      description:
        'Containe Technologies Ltd - Letter of Offer',
      url: '/assets/pdfs/rights-issue/letter-of-offer.pdf'
    },
    {
      title: 'RE',
      description:
        'Containe Technologies Ltd - RE',
      url: '/assets/pdfs/rights-issue/re.pdf'
    },
    {
      title: 'CAF',
      description:
        'Containe Technologies Ltd - CAF',
      url: '/assets/pdfs/rights-issue/caf.pdf'
    }
  ];

}
