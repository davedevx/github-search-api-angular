import { Component, OnInit, Input } from '@angular/core';

import { Repository } from '../../../models/repository';

@Component({
  selector: 'chart-bar',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() repository: Repository;

  public barChartLabels: string[] = ['Stargazers', 'Forks', 'Watchers', 'Open issues'];
  public barChartLegend = false;
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false,
  };
  public barChartType = 'bar';
  public barChartData: any[] = [];

  ngOnInit() {
    this.barChartData.push(
      {
        data: [
          this.repository.stargazers_count,
          this.repository.forks_count,
          this.repository.watchers_count,
          this.repository.open_issues_count,
        ]
      }
    );
  }
}
