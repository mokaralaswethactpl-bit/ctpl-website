
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { pages } from '../../content';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent {

  constructor(private router: Router) {}

  searchOpen = false;
  searchQuery = '';

  private readonly descriptions: Record<string, string> = {
    'motoreye-efrt':
      'Speed limiting technology for commercial vehicles.',

    'limits-epi':
      'Electronic speed control for safer driving.',

    'geo-limits-gsld':
      'Location-aware and geofencing speed control.',

    'ais-140-is16833':
      'AIS-140 vehicle location tracking and safety.',

    'embedded-esim':
      'Reliable IoT connectivity for devices.',

    'trano-rfid':
      'Contactless identification and tracking.',

    'trano':
      'Fleet visibility and vehicle tracking.',

    'tranopro':
      'AIS-140 tracking and operational monitoring.',

    'ctpl-erp':
      'Manage device and business operations.',

    'mis-convertz':
      'Installation and renewal management.',

    'umis':
      'Unified management for connected operations.',

    'ctpl-dialer':
      'Customer and technical support operations.',

    'vltd':
      'AIS-140 VLTD integrations across states.',

    'sld':
      'Speed limiting device installation and support.',

    'careers':
      'Explore careers and professional opportunities at CTPL.',

    'blogs':
      'Technology articles, industry insights and company updates.'
  };

  get searchResults() {

    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      return [];
    }

    const careerPage = {
      slug: 'careers',
      title: 'Careers',
      group: 'Careers',
      eyebrow: 'Career Opportunities',
      summary:
        'Explore careers, jobs, engineering, software development, manufacturing, operations and opportunities at Containe Technologies Limited.'
    };

    const blogsPage = {
      slug: 'blogs',
      title: 'Blogs',
      group: 'Blogs',
      eyebrow: 'CTPL Insights',
      summary:
        'Explore CTPL blogs, technology articles, industry insights, innovations and company updates.'
    };

    return [...pages, careerPage, blogsPage]
      .filter(page => {

        const content = [
          page.title,
          page.group,
          page.eyebrow,
          page.summary,
          this.descriptions[page.slug] ?? ''
        ].join(' ').toLowerCase();

        return content.includes(query);

      })
      .slice(0, 12);
  }

  getSearchResultLink(slug: string): string[] {

    if (slug === 'careers') {
      return ['/careers'];
    }

    if (slug === 'blogs') {
      return ['/blogs'];
    }

    return ['/page', slug];
  }

  openSearch(): void {
    this.searchQuery = '';
    this.searchOpen = true;
  }

  closeSearch(): void {
    this.searchOpen = false;
    this.searchQuery = '';
  }

  submitSearch(): void {

    const firstResult = this.searchResults[0];

    if (!firstResult) {
      return;
    }

    const destination =
      this.getSearchResultLink(firstResult.slug);

    this.closeSearch();

    void this.router.navigate(destination);
  }
}
