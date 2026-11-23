
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../reveal.directive';

@Component({
  selector: 'app-vltd-data-validity',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './vltd-data-validity.html',
  styleUrl: './vltd-data-validity.scss'
})
export class VltdDataValidityComponent {}
