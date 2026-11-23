
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { WhatsappButtonComponent } from './whatsap-button/whatsap-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, OnDestroy {

  loadingProgress = 0;
  showIntro = true;
  isExiting = false;
  showWebsite = false;

  private loadingTimer: ReturnType<typeof setInterval> | undefined;
  private exitTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadingTimer = setInterval(() => {

      this.loadingProgress += 5;

      if (this.loadingProgress >= 100) {
        this.loadingProgress = 100;

        clearInterval(this.loadingTimer);

        // Start logo flight and homepage reveal together
        this.isExiting = true;
        this.showWebsite = true;

        this.cdr.detectChanges();

        // Remove intro after 3.5 seconds
        this.exitTimer = setTimeout(() => {
          this.showIntro = false;
          this.cdr.detectChanges();
        }, 3500);
      }

      this.cdr.detectChanges();

    }, 40);
  }

  ngOnDestroy() {
    clearInterval(this.loadingTimer);
    clearTimeout(this.exitTimer);
  }
}
