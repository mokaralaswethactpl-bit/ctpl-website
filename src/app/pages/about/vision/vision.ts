
import { Component } from '@angular/core';
import { corporate } from '../../../content';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vision.html',
  styleUrl: './vision.scss'
})
export class VisionComponent {
  page = corporate.find(
    p => p.slug === 'vision-mission-values'
  );
}
