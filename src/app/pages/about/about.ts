
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { corporate } from '../../content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  aboutPages = corporate.filter(page =>
    page.group === 'About'
  );
}
