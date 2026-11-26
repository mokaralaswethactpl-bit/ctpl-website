
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { corporate } from '../../../content';

@Component({
  selector: 'app-market-presence',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './market-presence.html',
  styleUrl: './market-presence.scss'
})
export class MarketPresenceComponent {

  page = corporate.find(p => p.slug === 'market-presence');

}
