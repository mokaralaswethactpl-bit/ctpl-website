
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  inject,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
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
  implements AfterViewInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);

  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChildren('orbitCard')
  orbitCards!: QueryList<ElementRef<HTMLElement>>;

  products = products;

  // Keep your existing product routes.
  // Adjust only if your app.routes.ts uses
  // different product paths.
  productRoutes: Record<string, string> = {
    'motoreye-efrt': '/products/motoreye',
    'limits-epi': '/products/limits',
    'geo-limits-gsld': '/products/gsld',
    'ais-140-is16833': '/products/ais',
    'embedded-esim': '/products/e-sim',
    'tranogo-4g': '/products/tranogo-4g'
  };

  getProductRoute(slug: string): string {
  const normalizedSlug = slug.trim().toLowerCase();

  return this.productRoutes[normalizedSlug]
    ?? '/page/' + normalizedSlug;
}

  // ==========================================
  // CAROUSEL STATE
  // ==========================================

  activeIndex = signal(0);
  paused = signal(false);

  private readonly TWO_PI = Math.PI * 2;

  // One full rotation every 24 seconds.
  private readonly rotationDuration = 80000;

  // Front position is at the bottom of the oval.
  private phase = Math.PI / 2;

  private targetPhase: number | null = null;

  private animationFrame = 0;
  private lastFrameTime = 0;

  private isHovering = false;
  private isVisible = true;
  private reduceMotion = false;

  private visibilityObserver?: IntersectionObserver;

  private stage?: HTMLElement;

  // ==========================================
  // INITIALIZE
  // ==========================================

  ngAfterViewInit(): void {

    if (!this.isBrowser) {
      return;
    }

    this.stage = document.querySelector(
      '.ctpl-orbit-stage'
    ) as HTMLElement | null ?? undefined;

    this.reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (this.reduceMotion) {
      this.paused.set(true);
    }

    if (this.stage && 'IntersectionObserver' in window) {
      this.visibilityObserver = new IntersectionObserver(
        entries => {
          this.isVisible =
            entries.some(entry => entry.isIntersecting);
        },
        { threshold: 0.05 }
      );

      this.visibilityObserver.observe(this.stage);
    }

    this.renderOrbit();

    if (!this.reduceMotion) {
      this.zone.runOutsideAngular(() => {
        this.animationFrame =
          requestAnimationFrame(this.animate);
      });
    }

  }

  // ==========================================
  // ANIMATION LOOP
  // ==========================================

  private animate = (time: number): void => {

    if (!this.lastFrameTime) {
      this.lastFrameTime = time;
    }

    // Prevent large jumps when returning
    // from another browser tab.
    const delta = Math.min(
      time - this.lastFrameTime,
      50
    );

    this.lastFrameTime = time;

    if (this.targetPhase !== null) {

      // Smoothly bring a selected card
      // to the front of the oval.
      const difference =
        this.targetPhase - this.phase;

      const easing =
        1 - Math.exp(-delta / 210);

      this.phase += difference * easing;

      if (Math.abs(difference) < 0.002) {
        this.phase = this.targetPhase;
        this.targetPhase = null;
      }

    } else if (
      !this.paused() &&
      !this.isHovering &&
      this.isVisible
    ) {

      // Continuous movement.
      const speed =
        this.TWO_PI / this.rotationDuration;

      this.phase += delta * speed;

    }

    this.renderOrbit();

    this.animationFrame =
      requestAnimationFrame(this.animate);

  };

  // ==========================================
  // POSITION ALL SIX CARDS
  // ==========================================

  private renderOrbit(): void {

    if (!this.orbitCards?.length) {
      return;
    }

    const count = this.products.length;

    if (!count) {
      return;
    }

    const stageWidth =
      this.stage?.clientWidth ?? 1100;

    const isMobile = stageWidth < 700;

    const radiusX = isMobile
      ? stageWidth * 0.31
      : Math.min(stageWidth * 0.36, 455);

    const radiusY = isMobile ? 95 : 115;

    const step = this.TWO_PI / count;

    let closestIndex = 0;
    let bestDepth = -Infinity;

    this.orbitCards.forEach((cardRef, index) => {

      const card = cardRef.nativeElement;

      const angle =
        this.phase + index * step;

      // Horizontal oval position.
      const x =
        Math.cos(angle) * radiusX;

      // Vertical oval position.
      const y =
        Math.sin(angle) * radiusY;

      // 1 at front, 0 at back.
      const depth =
        (Math.sin(angle) + 1) / 2;

      // Front card is larger.
      const scale = isMobile
        ? 0.57 + depth * 0.38
        : 0.58 + depth * 0.42;

      const opacity =
        0.48 + depth * 0.52;

      const zIndex =
        Math.round(10 + depth * 100);

      const tilt =
        Math.cos(angle) * -7;

      card.style.transform = `
        translate(-50%, -50%)
        translate3d(${x}px, ${y}px, 0)
        scale(${scale})
        rotateY(${tilt}deg)
      `;

      card.style.opacity =
        opacity.toString();

      card.style.zIndex =
        zIndex.toString();

      if (depth > bestDepth) {
        bestDepth = depth;
        closestIndex = index;
      }

    });

    if (this.activeIndex() !== closestIndex) {

      this.zone.run(() => {
        this.activeIndex.set(closestIndex);
      });

    }

  }

  // ==========================================
  // ROTATE TO A PRODUCT
  // ==========================================

  focusProduct(index: number): void {

    if (!this.products.length) {
      return;
    }

    const count = this.products.length;
    const step = this.TWO_PI / count;

    const normalizedIndex =
      ((index % count) + count) % count;

    const desiredPhase =
      Math.PI / 2 - normalizedIndex * step;

    // Pick the shortest direction around
    // the circle to reach the card.
    const difference = Math.atan2(
      Math.sin(desiredPhase - this.phase),
      Math.cos(desiredPhase - this.phase)
    );

    this.targetPhase =
      this.phase + difference;

    // Stop automatic rotation after selection.
    this.paused.set(true);

    this.isHovering = false;

    if (this.reduceMotion) {
      this.phase = this.targetPhase;
      this.targetPhase = null;
      this.renderOrbit();
    }

  }

  // ==========================================
  // NEXT PRODUCT
  // ==========================================

  nextSlide(): void {

    if (!this.products.length) {
      return;
    }

    this.focusProduct(
      (this.activeIndex() + 1) % this.products.length
    );

  }

  // ==========================================
  // PREVIOUS PRODUCT
  // ==========================================

  previousSlide(): void {

    if (!this.products.length) {
      return;
    }

    this.focusProduct(
      (this.activeIndex() - 1 + this.products.length)
      % this.products.length
    );

  }

  // ==========================================
  // HOVER PAUSE
  // ==========================================

  pauseOnHover(): void {
    this.isHovering = true;
  }

  resumeOnLeave(): void {
    this.isHovering = false;
  }

  // ==========================================
  // PLAY / PAUSE
  // ==========================================

  toggleRotation(): void {

    this.paused.update(value => !value);

  }

  // ==========================================
  // CLEANUP
  // ==========================================

  ngOnDestroy(): void {

    if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.visibilityObserver?.disconnect();

  }

}
