
import { Component } from '@angular/core';
import { corporate } from '../../../content';

@Component({
  selector: 'app-market-presence',
  standalone: true,
  templateUrl: './market-presence.html',
  styleUrl: './market-presence.scss'
})
export class MarketPresenceComponent {
  page = corporate.find(
    p => p.slug === 'market-presence'
  );
}
