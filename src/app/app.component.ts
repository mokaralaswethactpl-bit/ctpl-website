
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { groups, pages } from './content';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule
  ],

  template: `

    <!-- =====================================
         CTPL WEBSITE HEADER
         ===================================== -->

    <header
      class="site-header"
      [class.scrolled]="scrolled"
      (mouseleave)="onHeaderLeave()"
    >

      <div class="container header-inner">

        <!-- CTPL LOGO -->

        <a
          class="logo"
          routerLink="/"
          (click)="closeAll()"
          aria-label="CTPL homepage"
        >
          <img
            src="/assets/images/ctpl-logo.png"
            alt="Containe Technologies Limited"
            class="ctpl-header-logo"
          />
        </a>

        <!-- MOBILE MENU TOGGLE -->

        <button
          class="menu-toggle"
          type="button"
          (click)="toggleMobile()"
          [attr.aria-expanded]="mobileOpen"
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        >
          {{ mobileOpen ? '✕' : '☰' }}
        </button>

        <!-- =====================================
             MAIN NAVIGATION
             ===================================== -->

        <nav
          id="main-nav"
          class="main-nav"
          [class.open]="mobileOpen"
          aria-label="Main navigation"
        >

          <!-- HOME -->

          <a
            routerLink="/"
            class="nav-simple"
            (click)="closeMenus()"
          >
            Home
          </a>

          <!-- ABOUT, PRODUCTS, SERVICES,
               INVESTORS, DEALER CENTRE -->

          @for (group of groups; track group.label) {

            @if (group.label === 'Customer Centre') {

              <!-- CUSTOMER CENTRE DIRECT LINK -->

              <a
                routerLink="/page/customer-centre"
                class="nav-simple ctpl-customer-direct"
                (click)="closeMenus()"
                (mouseenter)="closeDesktopDropdown()"
                (focus)="closeDesktopDropdown()"
              >
                Customer Centre
              </a>

            } @else {

              <!-- DROPDOWN NAVIGATION -->

              <div
                class="nav-group"
                [class.active]="openGroup === group.label"
                (mouseenter)="onGroupEnter(group.label)"
                (focusin)="onGroupFocus(group.label)"
              >

                <button
                  type="button"
                  (click)="toggleGroup(group.label)"
                  [attr.aria-expanded]="openGroup === group.label"
                  [attr.aria-controls]="'mobile-menu-' + $index"
                >
                  {{ group.label }}

                  <span
                    class="chevron"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>

                </button>

                <!-- MOBILE DROPDOWN -->

                <div
                  class="mobile-dropdown"
                  [id]="'mobile-menu-' + $index"
                >

                  @for (slug of group.links; track slug) {

                    <a
                      [routerLink]="['/page', slug]"
                      (click)="closeMenus()"
                    >
                      {{ getTitle(slug) }}
                    </a>

                  }

                </div>

              </div>

            }

          }

          <!-- CAREERS DIRECT LINK -->

          <a
            routerLink="/careers"
            class="nav-simple ctpl-careers-nav"
            (click)="closeMenus()"
            (mouseenter)="closeDesktopDropdown()"
            (focus)="closeDesktopDropdown()"
          >
            Careers
          </a>

          <!-- BLOGS DIRECT LINK -->

          <a
            routerLink="/blogs"
            class="nav-simple"
            (click)="closeMenus()"
            (mouseenter)="closeDesktopDropdown()"
            (focus)="closeDesktopDropdown()"
          >
            Blogs
          </a>

          <!-- SEARCH ICON -->

          <button
            type="button"
            class="ctpl-search-trigger"
            (click)="openSearch()"
            aria-label="Open website search"
            title="Search CTPL website"
          >

            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="10.8" cy="10.8" r="7.3"/>
              <path d="M16.3 16.3L22 22"/>
            </svg>

          </button>

          <!-- =====================================
               INTRA PORTAL BUTTON
               ===================================== -->

          <a
            href="https://intra.containe.in/"
            class="ctpl-intra-btn"
            target="_blank"
            rel="noopener noreferrer"
            (click)="closeAll()"
            (mouseenter)="closeDesktopDropdown()"
            (focus)="closeDesktopDropdown()"
            aria-label="Open CTPL INTRA portal"
            title="CTPL INTRA Portal"
          >
            INTRA
          </a>

        </nav>

      </div>

      <!-- =====================================
           DESKTOP MEGA MENU
           ===================================== -->

      @if (openGroup && !searchOpen) {

        <div
          class="mega-menu"
          [attr.aria-label]="openGroup + ' menu'"
        >

          <div class="container mega-container">

            <div class="mega-heading">

              <span class="mega-eyebrow">
                CTPL / {{ openGroup }}
              </span>

              <h2>{{ openGroup }}</h2>

              <p>{{ getGroupDescription() }}</p>

            </div>

            <div class="mega-grid">

              @for (
                slug of getActiveLinks();
                track slug;
                let i = $index
              ) {

                <a
                  class="mega-item"
                  [routerLink]="['/page', slug]"
                  (click)="closeMenus()"
                >

                  <span
                    class="mega-icon"
                    aria-hidden="true"
                  >
                    {{ getIcon(slug, i) }}
                  </span>

                  <span class="mega-copy">

                    <strong>{{ getTitle(slug) }}</strong>

                    <small>{{ getDescription(slug) }}</small>

                  </span>

                </a>

              }

            </div>

          </div>

        </div>

      }

    </header>

    <!-- =====================================
         FULL SCREEN SEARCH OVERLAY
         ===================================== -->

    @if (searchOpen) {

      <div
        class="ctpl-search-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Search CTPL website"
        (click)="closeSearch()"
      >

        <!-- CLOSE SEARCH BUTTON -->

        <button
          type="button"
          class="ctpl-search-close"
          aria-label="Close search"
          (click)="closeSearch()"
        >
          ×
        </button>

        <!-- SEARCH PANEL -->

        <div
          class="ctpl-search-panel"
          (click)="$event.stopPropagation()"
        >

          <form
            class="ctpl-search-form"
            (ngSubmit)="submitSearch()"
            role="search"
          >

            <input
              type="search"
              name="siteSearch"
              [(ngModel)]="searchQuery"
              placeholder="Search..."
              aria-label="Search website pages"
              autocomplete="off"
            />

            <button
              type="submit"
              class="ctpl-search-submit"
              aria-label="Search"
            >

              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="10.8" cy="10.8" r="7.3"/>
                <path d="M16.3 16.3L22 22"/>
              </svg>

            </button>

          </form>

          <!-- LIVE SEARCH RESULTS -->

          @if (searchQuery.trim()) {

            <div
              class="ctpl-search-results"
              aria-label="Search results"
            >

              @if (searchResults.length > 0) {

                <p class="ctpl-search-results-label">
                  SEARCH RESULTS
                </p>

                @for (
                  result of searchResults;
                  track result.slug
                ) {

                  <a
                    [routerLink]="getSearchResultLink(result.slug)"
                    class="ctpl-search-result"
                    (click)="closeAll()"
                  >

                    <span class="ctpl-search-result-text">

                      <strong>{{ result.title }}</strong>

                      <small>{{ result.group }}</small>

                    </span>

                    <span aria-hidden="true">
                      ↗
                    </span>

                  </a>

                }

              } @else {

                <p class="ctpl-search-no-results">
                  No matching pages found.
                </p>

              }

            </div>

          }

        </div>

      </div>

    }

    <!-- =====================================
         MAIN WEBSITE CONTENT
         ===================================== -->

    <main (click)="closeMenus()">
      <router-outlet />
    </main>

    <!-- =====================================
         FLOATING WHATSAPP BUTTON
         ===================================== -->

    <a
      class="ctpl-whatsapp-float"
      href="https://wa.me/919100777440"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact CTPL on WhatsApp"
      title="Chat with CTPL on WhatsApp"
    >

      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >

        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.54 1.75 6.52L3 29l6.65-1.74A12.95 12.95 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-2.08 0-4.11-.56-5.88-1.62l-.42-.25-3.95 1.03 1.05-3.85-.28-.44A10.55 10.55 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.6 16 26.6zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.22-.37.24-.69.08-.32-.16-1.35-.5-2.56-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.75-.99-2.39-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.34c.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.14-.3-.22-.62-.38z"/>

      </svg>

    </a>

    <!-- =====================================
         CTPL FOOTER
         ===================================== -->

    <footer class="footer">

      <div class="container">

        <div class="footer-top">

          <!-- COMPANY INFORMATION -->

          <div>

            <div class="footer-logo">

              <img
                src="/assets/images/ctpl-logo.png"
                alt="Containe Technologies Limited"
                class="ctpl-footer-logo"
              />

            </div>

            <p>
              Containe Technologies Limited
            </p>

            <p class="muted">
              Automotive safety · Connected mobility · IoT/M2M
            </p>

          </div>

          <!-- MAIN PAGES -->

          <div class="footer-links ctpl-footer-main-links">

            <a routerLink="/page/our-story">
              About
            </a>

            <a routerLink="/page/motoreye-efrt">
              Products
            </a>

            <a routerLink="/page/trano">
              Services
            </a>

            <a routerLink="/page/corporate-information">
              Investors
            </a>

            <a routerLink="/page/rfc-service-centres">
              Dealer Centre
            </a>

            <a routerLink="/page/customer-centre">
              Customer Centre
            </a>

            <!-- CAREERS FOOTER LINK -->

            <a routerLink="/careers">
              Careers
            </a>

            <!-- BLOGS FOOTER LINK -->

            <a routerLink="/blogs">
              Blogs
            </a>

          </div>

        </div>

        <!-- COPYRIGHT -->

        <div class="footer-bottom">

          <span>
            © {{ year }} Containe Technologies Limited.
            All Rights Reserved.
          </span>

        </div>

      </div>

    </footer>

  `
})
export class AppComponent {

  private router = inject(Router);

  readonly groups = groups;
  readonly year = new Date().getFullYear();

  mobileOpen = false;
  openGroup = '';
  scrolled = false;

  // SEARCH STATE

  searchOpen = false;
  searchQuery = '';

  /* =====================================
     SHORT MEGA MENU DESCRIPTIONS
     ===================================== */

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

  /* =====================================
     WEBSITE SEARCH FUNCTIONS
     ===================================== */

  get searchResults() {

    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      return [];
    }

    // CAREERS SEARCH ENTRY

    const careerPage = {
      slug: 'careers',
      title: 'Careers',
      group: 'Careers',
      eyebrow: 'Career Opportunities',
      summary:
        'Explore careers, jobs, engineering, software development, manufacturing, operations and opportunities at Containe Technologies Limited.'
    };

    // BLOGS SEARCH ENTRY

    const blogsPage = {
      slug: 'blogs',
      title: 'Blogs',
      group: 'Blogs',
      eyebrow: 'CTPL Insights',
      summary:
        'Explore CTPL blogs, technology articles, industry insights, innovations and company updates.'
    };

    return [...pages, careerPage, blogsPage].filter(page => {

      const content = [
        page.title,
        page.group,
        page.eyebrow,
        page.summary,
        this.descriptions[page.slug] ?? ''
      ].join(' ').toLowerCase();

      return content.includes(query);

    }).slice(0, 12);

  }

  /* =====================================
     SEARCH RESULT ROUTING
     ===================================== */

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

    this.closeMenus();
    this.searchQuery = '';
    this.searchOpen = true;

  }

  closeSearch(): void {

    this.searchOpen = false;
    this.searchQuery = '';

  }

  // ENTER KEY OPENS FIRST SEARCH RESULT

  submitSearch(): void {

    const firstResult = this.searchResults[0];

    if (!firstResult) {
      return;
    }

    const destination =
      this.getSearchResultLink(firstResult.slug);

    this.closeAll();

    void this.router.navigate(destination);

  }

  closeAll(): void {

    this.closeMenus();
    this.closeSearch();

  }

  /* =====================================
     PAGE TITLES AND DESCRIPTIONS
     ===================================== */

  getTitle(slug: string): string {

    return pages.find(
      page => page.slug === slug
    )?.title ?? slug;

  }

  getDescription(slug: string): string {

    return this.descriptions[slug]
      ?? pages.find(page => page.slug === slug)?.summary
      ?? 'Explore CTPL information and solutions.';

  }

  getGroupDescription(): string {

    const subtitles: Record<string, string> = {

      About:
        'Explore our company, mission, capabilities and presence.',

      Products:
        'Vehicle safety, telematics and connectivity technologies.',

      Services:
        'Platforms and technical services for connected mobility.',

      Investors:
        'Corporate governance, filings and shareholder information.',

      'Dealer Centre':
        'Dealer services, device validity and technical resources.'

    };

    return subtitles[this.openGroup]
      ?? 'Explore Containe Technologies Limited.';

  }

  /* =====================================
     MEGA MENU ICONS
     ===================================== */

  getIcon(slug: string, index: number): string {

    const name = slug.toLowerCase();

    if (
      name.includes('efrt') ||
      name.includes('speed') ||
      name.includes('epi')
    ) {
      return '◴';
    }

    if (
      name.includes('geo') ||
      name.includes('vltd')
    ) {
      return '◎';
    }

    if (name.includes('sim')) {
      return '▣';
    }

    if (name.includes('rfid')) {
      return '⌁';
    }

    if (name.includes('trano')) {
      return '◈';
    }

    if (
      name.includes('erp') ||
      name.includes('mis')
    ) {
      return '⚙';
    }

    if (
      name.includes('report') ||
      name.includes('ipo') ||
      name.includes('share')
    ) {
      return '▤';
    }

    if (
      name.includes('support') ||
      name.includes('customer')
    ) {
      return '◇';
    }

    return [
      '◎',
      '◈',
      '▣',
      '◉',
      '◇',
      '⚙'
    ][index % 6];

  }

  /* =====================================
     ACTIVE MEGA MENU LINKS
     ===================================== */

  getActiveLinks(): string[] {

    return this.groups.find(
      group => group.label === this.openGroup
    )?.links ?? [];

  }

  /* =====================================
     NAVIGATION CONTROLS
     ===================================== */

  toggleGroup(label: string): void {

    this.openGroup =
      this.openGroup === label ? '' : label;

  }

  toggleMobile(): void {

    this.mobileOpen = !this.mobileOpen;

    if (!this.mobileOpen) {
      this.openGroup = '';
    }

  }

  onGroupEnter(label: string): void {

    if (window.innerWidth > 900) {
      this.openGroup = label;
    }

  }

  onGroupFocus(label: string): void {

    if (window.innerWidth > 900) {
      this.openGroup = label;
    }

  }

  closeDesktopDropdown(): void {

    if (window.innerWidth > 900) {
      this.openGroup = '';
    }

  }

  onHeaderLeave(): void {

    if (window.innerWidth > 900) {
      this.openGroup = '';
    }

  }

  closeMenus(): void {

    this.mobileOpen = false;
    this.openGroup = '';

  }

  /* =====================================
     SCROLL EFFECT
     ===================================== */

  @HostListener('window:scroll')
  onScroll(): void {

    this.scrolled = window.scrollY > 16;

  }

  /* =====================================
     RESIZE HANDLING
     ===================================== */

  @HostListener('window:resize')
  onResize(): void {

    this.closeMenus();

  }

  /* =====================================
     ESCAPE KEY CLOSES SEARCH
     ===================================== */

  @HostListener('document:keydown.escape')
  onEscape(): void {

    this.closeAll();

  }

}
