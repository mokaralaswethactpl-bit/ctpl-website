import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-stat-strip',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './stat-strip.html',
  styleUrl: './stat-strip.css'
})
export class StatStripComponent {
  experience = 18;
}