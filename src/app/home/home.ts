import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero';
import { StatStripComponent } from '../stat-strip/stat-strip';
import { ProductPortfolioComponent } from '../product-portfolio/product-portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatStripComponent,
    ProductPortfolioComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}