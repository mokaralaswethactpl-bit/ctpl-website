
import { Component } from '@angular/core';

@Component({
  selector: 'app-motoreye-efrt',
  standalone: true,
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
