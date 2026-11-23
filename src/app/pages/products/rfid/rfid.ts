
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trano-rfid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rfid.html',
  styleUrl: './rfid.scss'
})
export class TranoRfidComponent {

  title = 'Trano RFID';

  eyebrow = 'CONTACTLESS IDENTIFICATION';

  summary =
    'Trano RFID supports contactless identification and tracking through RFID-based technology. It forms part of CTPL’s connected technology portfolio, helping support organized identification processes and tracking-related applications.';

  image = '/assets/images/trano-rfid.png';

}
