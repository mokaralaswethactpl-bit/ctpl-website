
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../content';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-products',
  standalone: true,

  imports: [
    RouterLink,
    RevealDirective
  ],

  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  // ======================================
  // ORIGINAL PRODUCT DATA
  // ======================================

  products = products;


  // ======================================
  // PRODUCT PAGE NAVIGATION
  // ======================================

  productRoutes: Record<string, string> = {

    'motoreye-efrt': '/products/motoreye',

    'limits-epi': '/products/limits',

    'geo-limits-gsld': '/products/gsld',

    'ais-140-is16833': '/products/ais',

    'embedded-esim': '/products/e-sim',

    'trano-rfid': '/products/rfid'

  };


  // ======================================
  // GET PRODUCT ROUTE
  // ======================================

  getProductRoute(slug: string): string {

    return this.productRoutes[slug]
      ?? '/page/' + slug;

  }

}
