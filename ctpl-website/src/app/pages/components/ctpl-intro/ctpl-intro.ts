
import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal
} from '@angular/core';

import {
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';

@Component({
  selector: 'app-ctpl-intro',
  standalone: true,
  templateUrl: './ctpl-intro.html',
  styleUrl: './ctpl-intro.scss'
})
export class CtplIntro implements OnInit, OnDestroy {

  @ViewChild('introLogo')
  introLogo?: ElementRef<HTMLImageElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  // INTRO STATES

  progress = signal(0);
  visible = signal(true);
  flying = signal(false);
  fading = signal(false);

  // ANIMATION SETTINGS

  private readonly loadingDuration = 2000;
  private readonly flightDuration = 900;

  private progressTimer?: ReturnType<typeof setInterval>;

  private movingLogo?: HTMLImageElement;
  private headerLogo?: HTMLImageElement;
  private flightAnimation?: Animation;

  private originalHeaderVisibility = '';

  private startedFlight = false;
  private destroyed = false;

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      this.visible.set(false);
      return;
    }

    this.startLoading();

  }

  // =======================================
  // 1. PROGRESS FROM 0 TO 100
  // =======================================

  private startLoading(): void {

    const interval = 20;
    const totalSteps = this.loadingDuration / interval;

    let step = 0;

    this.progressTimer = setInterval(() => {

      step++;

      const percentage = Math.min(
        100,
        Math.round((step / totalSteps) * 100)
      );

      this.progress.set(percentage);

      if (percentage >= 100) {

        this.stopProgressTimer();

        // NO EXTRA TIMEOUT OR WAIT HERE
        this.moveLogoToHeader();

      }

    }, interval);

  }

  private stopProgressTimer(): void {

    if (this.progressTimer !== undefined) {
      clearInterval(this.progressTimer);
      this.progressTimer = undefined;
    }

  }

  // =======================================
  // 2. MOVE LOGO TO ACTUAL NAVBAR POSITION
  // =======================================

  private moveLogoToHeader(): void {

    if (this.startedFlight || this.destroyed) {
      return;
    }

    this.startedFlight = true;

    const source = this.introLogo?.nativeElement;

    const target =
      this.document.querySelector<HTMLImageElement>(
        '.main-header .company-logo'
      );

    if (!source || !target) {
      this.finishWithoutFlight();
      return;
    }

    // MEASURE REAL POSITIONS

    const start = source.getBoundingClientRect();
    const end = target.getBoundingClientRect();

    if (
      start.width <= 0 ||
      start.height <= 0 ||
      end.width <= 0 ||
      end.height <= 0
    ) {
      this.finishWithoutFlight();
      return;
    }

    // CREATE A SEPARATE MOVING LOGO
    // DIRECTLY INSIDE DOCUMENT BODY

    const clone = this.document.createElement('img');

    clone.src = source.currentSrc || source.src;
    clone.alt = '';
    clone.setAttribute('aria-hidden', 'true');

    Object.assign(clone.style, {
      position: 'fixed',
      left: `${start.left}px`,
      top: `${start.top}px`,
      width: `${start.width}px`,
      height: `${start.height}px`,
      maxWidth: 'none',
      maxHeight: 'none',
      margin: '0',
      padding: '0',
      display: 'block',
      objectFit: 'contain',
      objectPosition: 'center',
      transform: 'none',
      filter: 'none',
      opacity: '1',
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: '2147483647'
    });

    this.document.body.appendChild(clone);

    this.movingLogo = clone;
    this.headerLogo = target;

    // HIDE ORIGINAL NAVBAR LOGO
    // UNTIL MOVING LOGO ARRIVES

    this.originalHeaderVisibility =
      target.style.visibility;

    target.style.setProperty(
      'visibility',
      'hidden',
      'important'
    );

    // START INTRO FADE AND LOGO MOVEMENT
    // IN THE SAME ANIMATION STEP

    this.flying.set(true);
    this.fading.set(true);

    const win = this.document.defaultView;

    const reduceMotion = win?.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches ?? false;

    const duration = reduceMotion
      ? 0
      : this.flightDuration;

    // ANIMATE POSITION AND SIZE
    // TO THE EXACT NAVBAR IMAGE RECTANGLE

    this.flightAnimation = clone.animate(
      [
        {
          left: `${start.left}px`,
          top: `${start.top}px`,
          width: `${start.width}px`,
          height: `${start.height}px`,
          opacity: 1
        },
        {
          left: `${end.left}px`,
          top: `${end.top}px`,
          width: `${end.width}px`,
          height: `${end.height}px`,
          opacity: 1
        }
      ],
      {
        duration: duration,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards'
      }
    );

    this.flightAnimation.onfinish = () => {
      this.completeIntro();
    };

  }

  // =======================================
  // 3. FALLBACK
  // =======================================

  private finishWithoutFlight(): void {

    this.flying.set(true);
    this.fading.set(true);
    this.visible.set(false);

  }

  // =======================================
  // 4. COMPLETE ANIMATION
  // =======================================

  private completeIntro(): void {

    // RESTORE REAL NAVBAR LOGO

    if (this.headerLogo) {
      if (this.originalHeaderVisibility) {
        this.headerLogo.style.setProperty(
          'visibility',
          this.originalHeaderVisibility
        );
      } else {
        this.headerLogo.style.removeProperty(
          'visibility'
        );
      }
    }

    // REMOVE MOVING LOGO

    if (this.flightAnimation) {
      this.flightAnimation.onfinish = null;
      this.flightAnimation.cancel();
      this.flightAnimation = undefined;
    }

    this.movingLogo?.remove();

    this.movingLogo = undefined;
    this.headerLogo = undefined;

    // REMOVE LOADING SCREEN

    if (!this.destroyed) {
      this.visible.set(false);
    }

  }

  // =======================================
  // CLEANUP
  // =======================================

  ngOnDestroy(): void {

    this.destroyed = true;

    this.stopProgressTimer();
    this.completeIntro();

  }

}
