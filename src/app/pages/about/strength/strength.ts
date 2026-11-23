
import { Component } from '@angular/core';
import { corporate } from '../../../content';

@Component({
  selector: 'app-strength',
  standalone: true,
  templateUrl: './strength.html',
  styleUrl: './strength.scss'
})
export class StrengthComponent {
  page = corporate.find(
    p => p.slug === 'strength-infrastructure'
  );
}
