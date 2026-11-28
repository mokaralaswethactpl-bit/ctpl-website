
import {
  Component,
  AfterViewInit,
  ElementRef
} from '@angular/core';

import { RouterLink } from '@angular/router';

type IPOItem = {
  title: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-ipo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ipo.html',
  styleUrl: './ipo.scss'
})

export class IPOComponent implements AfterViewInit {

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {}

  // =====================================
  // HEADING AND CARD FALLING ANIMATION
  // =====================================

  ngAfterViewInit(): void {

    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    requestAnimationFrame(() => {

      const host = this.elementRef.nativeElement;

      // HEADING ANIMATION

      const heading = host.querySelector<HTMLElement>(
        '.ipo-heading-fall'
      );

      if (heading) {

        const headingAnimation = heading.animate(
          [
            {
              transform: 'translateY(-70px)',
              opacity: 0
            },
            {
              transform: 'translateY(0)',
              opacity: 1
            }
          ],
          {
            duration: 1600,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both'
          }
        );

        headingAnimation.onfinish = () => {
          headingAnimation.cancel();
        };

      }

      // CARDS FALL ONE BY ONE

      const cards = host.querySelectorAll<HTMLElement>(
        '.ipo-card-fall'
      );

      cards.forEach((card, index) => {

        const cardAnimation = card.animate(
          [
            {
              transform: 'translateY(-350px) rotate(-8deg)',
              opacity: 0
            },
            {
              transform: 'translateY(20px) rotate(3deg)',
              opacity: 1,
              offset: 0.65
            },
            {
              transform: 'translateY(-12px) rotate(-2deg)',
              offset: 0.80
            },
            {
              transform: 'translateY(5px) rotate(1deg)',
              offset: 0.92
            },
            {
              transform: 'translateY(0) rotate(0deg)',
              opacity: 1
            }
          ],
          {
            duration: 2600,
            delay: 700 + (index * 650),
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
          }
        );

        // Restore original CSS styling after animation
        cardAnimation.onfinish = () => {
          cardAnimation.cancel();
        };

      });

    });

  }

  // =====================================
  // IPO PDF DOCUMENTS
  // =====================================

  ipoItems: IPOItem[] = [

    {
      title: 'DRAFT PROSPECTUS',
      description:
        'Preliminary prospectus issued for regulatory and investor review.',
      url: 'assets/pdfs/ipo/draft-prospectus.pdf'
    },

    {
      title: 'FINAL PROSPECTUS',
      description:
        'Final prospectus containing complete and approved issue details.',
      url: 'assets/pdfs/ipo/final-prospectus.pdf'
    },

    {
      title: 'PRE-ISSUE ADVERTISEMENT',
      description:
        'Official pre-issue advertisements released as per regulatory requirements.',
      url: 'assets/pdfs/ipo/pre-issue-advertisement.pdf'
    },

    {
      title: 'ONLINE APPLICATION FORM',
      description:
        'Download official IPO application and revision forms.',
      url: 'assets/pdfs/ipo/online-application-form.pdf'
    },

    {
      title: 'REVISION APPLICATION FORM',
      description:
        'Form for submitting corrections or revisions to IPO applications.',
      url: 'assets/pdfs/ipo/revision-application-form.pdf'
    },

    {
      title: 'BLANK APPLICATION FORM',
      description:
        'Standard blank form for submitting a fresh IPO application.',
      url: 'assets/pdfs/ipo/blank-application-form.pdf'
    },

    {
      title: 'ABRIDGED PROSPECTUS',
      description:
        'Summarised prospectus highlighting key issue and company details.',
      url: 'assets/pdfs/ipo/abridged-prospectus.pdf'
    },

    {
      title: 'GENERAL INFORMATION DOCUMENT',
      description:
        'Essential general information related to the public issue.',
      url: 'assets/pdfs/ipo/general-information-document.pdf'
    }

  ];

}
