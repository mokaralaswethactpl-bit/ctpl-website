
import { Component } from '@angular/core';
import { corporate } from '../../../content';

@Component({
  selector: 'app-vision',
  standalone: true,
  templateUrl: './vision.html',
  styleUrl: './vision.scss'
})
export class VisionComponent {
  page = corporate.find(
    p => p.slug === 'vision-mission-values'
  );
}
