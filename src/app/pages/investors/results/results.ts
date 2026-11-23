
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type ReportDocument = {
  year: string;
  label: string;
  url: string | null;
};

@Component({
  selector: 'app-results-reports',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class ResultsReportsComponent {

  activeTab = signal(0);

  selectTab(index: number): void {
    this.activeTab.set(index);
  }

  tabs: string[] = [
    'Annual Reports',
    'Financial Results',
    'Un-claimed Dividend',
    'Scrutinizer Report',
    'Newspaper Publication',
    'Annual Return',
    'Voting Results',
    'Public Notice'
  ];

  annualReports: ReportDocument[] = [
    {
      year: '2025 – 2026',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2024 – 2025',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'VIEW PDF',
      url: null
    }
  ];

  financialResults = [
    {
      year: '2025 – 26',
      sixMonthsUrl: null as string | null,
      fullYearUrl: null as string | null
    },
    {
      year: '2024 – 25',
      sixMonthsUrl: null as string | null,
      fullYearUrl: null as string | null
    },
    {
      year: '2023 – 24',
      sixMonthsUrl: null as string | null,
      fullYearUrl: null as string | null
    },
    {
      year: '2022 – 23',
      sixMonthsUrl: null as string | null,
      fullYearUrl: null as string | null
    }
  ];

  scrutinizerReports: ReportDocument[] = [
    {
      year: '2024 – 2025',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'VIEW PDF',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'VIEW PDF',
      url: null
    }
  ];

  annualReturns: ReportDocument[] = [
    {
      year: '2024 – 2025',
      label: 'MGT-7',
      url: null
    },
    {
      year: '2023 – 2024',
      label: 'MGT-7',
      url: null
    },
    {
      year: '2022 – 2023',
      label: 'MGT-7',
      url: null
    }
  ];

}
