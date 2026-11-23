
import { Component } from '@angular/core';
import { corporate } from '../../../content';

@Component({
  selector: 'app-our-story',
  standalone: true,
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss'
})
export class OurStoryComponent {
  page = corporate.find(p => p.slug === 'our-story');
}
