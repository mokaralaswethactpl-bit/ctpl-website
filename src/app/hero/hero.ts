
import { Component } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ActionButton],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {}
