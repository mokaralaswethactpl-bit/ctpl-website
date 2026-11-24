
import { Component } from '@angular/core';
import { corporate } from '../../../content';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-strength',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './strength.html',
  styleUrl: './strength.scss'
})
export class StrengthComponent {
  page = corporate.find(
    p => p.slug === 'strength-infrastructure'
  );
}
