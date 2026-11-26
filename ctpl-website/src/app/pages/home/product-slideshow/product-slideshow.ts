
import {
  Component,
  OnInit,
  OnDestroy,
  computed,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { products } from '../../../content';

@Component({
  selector: 'app-product-slideshow',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-slideshow.html',
  styleUrl: './product-slideshow.scss'
})
export class ProductSlideshowComponent
  implements OnInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);

  private isBrowser = isPlatformBrowser(this.platformId);

  // =====================================
  // CTPL PRODUCT DATA
  // =====================================

  products = products;

  // =====================================
  // ANGULAR PRODUCT ROUTES
  // =====================================

  productRoutes: Record<string, string> = {
    'motoreye-efrt': '/products/motoreye',
    'limits-epi': '/products/limits',
    'geo-limits-gsld': '/products/gsld',
    'ais-140-is16833': '/products/ais',
    'embedded-esim': '/products/e-sim',
    'trano-rfid': '/products/rfid'
  };

  getProductRoute(slug: string): string {
    return this.productRoutes[slug] ?? '/page/' + slug;
  }

  // =====================================
  // SLIDESHOW STATE
  // =====================================

  readonly slideDuration = 3500;

  activeIndex = signal(0);

  paused = signal(false);

  progressKey = signal(0);

  private timer?: ReturnType<typeof setTimeout>;

  private reducedMotion = false;

  // =====================================
  // ACTIVE PRODUCT
  // =====================================

  activeProduct = computed(() => {
    return this.products[this.activeIndex()];
  });

  // =====================================
  // PREVIOUS PRODUCT
  // =====================================

  previousProduct = computed(() => {

    if (!this.products.length) {
      return undefined;
    }

    const index =
      (this.activeIndex() - 1 + this.products.length)
      % this.products.length;

    return this.products[index];

  });

  // =====================================
  // NEXT PRODUCT
  // =====================================

  nextProduct = computed(() => {

    if (!this.products.length) {
      return undefined;
    }

    const index =
      (this.activeIndex() + 1)
      % this.products.length;

    return this.products[index];

  });

  // =====================================
  // INITIALIZE SLIDESHOW
  // =====================================

  ngOnInit(): void {

    if (!this.isBrowser) {
      return;
    }

    this.reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (this.reducedMotion) {
      this.paused.set(true);
      return;
    }

    this.startAutoPlay();

  }

  // =====================================
  // START AUTOPLAY
  // =====================================

  private startAutoPlay(): void {

    this.stopAutoPlay();

    if (
      !this.isBrowser ||
      this.paused() ||
      this.products.length <= 1
    ) {
      return;
    }

    this.timer = setTimeout(() => {

      this.activeIndex.update(
        index => (index + 1) % this.products.length
      );

      this.progressKey.update(key => key + 1);

      this.startAutoPlay();

    }, this.slideDuration);

  }

  // =====================================
  // STOP AUTOPLAY
  // =====================================

  private stopAutoPlay(): void {

    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }

  }

  // =====================================
  // SELECT A SLIDE
  // =====================================

  goToSlide(index: number): void {

    if (!this.products.length) {
      return;
    }

    const normalizedIndex =
      (index + this.products.length) %
      this.products.length;

    this.activeIndex.set(normalizedIndex);

    this.progressKey.update(key => key + 1);

    this.startAutoPlay();

  }

  // =====================================
  // PREVIOUS SLIDE
  // =====================================

  previousSlide(): void {

    this.goToSlide(
      this.activeIndex() - 1
    );

  }

  // =====================================
  // NEXT SLIDE
  // =====================================

  nextSlide(): void {

    this.goToSlide(
      this.activeIndex() + 1
    );

  }

  // =====================================
  // PLAY / PAUSE
  // =====================================

  togglePause(): void {

    const shouldPause = !this.paused();

    this.paused.set(shouldPause);

    if (shouldPause) {

      this.stopAutoPlay();

    } else {

      this.progressKey.update(key => key + 1);
      this.startAutoPlay();

    }

  }

  // =====================================
  // CLEANUP
  // =====================================

  ngOnDestroy(): void {

    this.stopAutoPlay();

  }

}
