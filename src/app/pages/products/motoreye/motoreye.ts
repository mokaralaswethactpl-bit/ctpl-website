
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-motoreye-efrt',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './motoreye.html',
  styleUrl: './motoreye.scss'
})
export class MotoreyeEfrtComponent {

  title = 'MotorEye · EFRT';

  eyebrow = 'SPEED MANAGEMENT';

  summary = `Advanced speed limiting solution for legacy commercial vehicles.`;

  image = '/assets/images/motoreye.png';

  source = 'https://containe.in/motoreye-model-efrt/';

}
