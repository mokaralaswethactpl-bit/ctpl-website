
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">CTPL / INSIGHTS</div>
        <h1>Blogs</h1>
        <p>
          Explore insights, innovations and updates
          from Containe Technologies Limited.
        </p>
      </div>
    </section>

    <section class="ctpl-insights-section">
      <div class="container ctpl-insights-content">
        <div class="ctpl-insights-icon" aria-hidden="true">◈</div>

        <h2>Blogs Coming Soon</h2>

        <p>
          We're preparing technology articles,
          industry insights and company updates
          to share here.
        </p>

        <span class="ctpl-insights-status">Stay Tuned</span>
      </div>
    </section>
  `
})
export class BlogsComponent {}
