
import { Component } from '@angular/core';
import { corporate } from '../../../content';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss'
})
export class OurStoryComponent {
  page = corporate.find(p => p.slug === 'our-story');
}
