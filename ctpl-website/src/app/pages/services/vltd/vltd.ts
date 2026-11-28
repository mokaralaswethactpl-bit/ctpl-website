
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vltd',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './vltd.html',
  styleUrl: './vltd.scss'
})
export class VltdComponent {

  title = 'VLTD State Integrations';

  eyebrow = 'GOVERNMENT INTEGRATIONS';

  summary = `CTPL VLTD State Integrations services focus on the coordination of AIS-140 Vehicle Location Tracking Device requirements across government and departmental applications. These services relate to transport, mining and other sectors where vehicle tracking information is integrated with relevant operational systems. The integration framework supports the needs of organizations and authorized stakeholders working with state-level vehicle monitoring requirements, subject to the applicable technical specifications and approvals.`;

  image = 'assets/images/vltd-service.jpg';

  source = 'https://containe.in/vltd/';


  // MINING INTEGRATIONS

  miningStates = [
    'Andhra Pradesh',
    'Telangana',
    'Rajasthan'
  ];


  // TRANSPORT INTEGRATIONS

  transportStates = [
    'Delhi',
    'Himachal Pradesh',
    'Kerala',
    'Karnataka',
    'Ladakh',
    'Madhya Pradesh',
    'Maharashtra',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Tripura',
    'Tamil Nadu',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal'
  ];


  // FOOD CORPORATION

  foodCorporationStates = [
    'West Bengal'
  ];

}
