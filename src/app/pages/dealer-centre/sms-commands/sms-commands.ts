
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type SmsCommand = {
  field: string;
  description: string;
  command: string;
  response: string;
};

@Component({
  selector: 'app-tranopro-sms-commands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tranopro-sms-commands.html',
  styleUrl: './tranopro-sms-commands.scss'
})
export class TranoproSmsCommandsComponent {

  smsCommands: SmsCommand[] = [

    {
      field: 'DEBUG',
      description: 'To get device functional status',
      command: '@GET#DEBUG,',
      response:
        'IMEI-868997035864410, GPS-FIX, GPRS-FIX, SAT-7, HDOP-0.5, IRNSS FIX, SIG-24, IGN-ON, EXT.Batt-13.5V, MEMS SENSOR OK, SPI Memo OK, SW-1.0.0, ODO_MTR-16.2'
    },

    {
      field: 'LOC',
      description: 'To get on-demand location',
      command: '@GET#LOC,',
      response:
        'GPS: Lt-28.472115 N, Ln-077.307856 E'
    },

    {
      field: 'GPS',
      description: 'To get GPS data',
      command: '@GET#GPS,',
      response:
        '#869247045152227, 020722, 111949, 017.448064, 078.588617, Speed-000.18, SAT-09, RTC-11:19:51'
    },

    {
      field: 'GPRS',
      description: 'To get GPRS data',
      command: '@GET#GPRS,',
      response:
        '#861359032242578, 28.472115 N, 077.307856 E, Network-IDEA, Signal-24'
    },

    {
      field: 'INFO',
      description: 'To get device and SIM details',
      command: '@GET#INFO,',
      response:
        'IMEI-861359032242578, SIM-89910473021821137542, VID-AERO, VRN-DL1C5349'
    },

    {
      field: 'CONF',
      description: 'To get device configuration',
      command: '@GET#CONF,',
      response:
        'IP1-35.155.23.246 PORT-20005, IP2-36.154.23.247 PORT-20001, Speed Limit-80 KM/H, APN-internet, AT-10, ST-600, ET-300, TT-30'
    },

    {
      field: 'HLTH',
      description: 'To get device health status',
      command: '@GET#HLTH,',
      response:
        '$, A, AERO, SW-1.0.0, Battery OK, Signal OK, Memory OK'
    }

  ];

}
