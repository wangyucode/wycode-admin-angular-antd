import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { JsonResult } from '../../../service/type';
import { Chart } from '@antv/g2';
import { View } from '@antv/data-set';

interface AppUse {
  app: string;
  use: number;
}

@Component({
  selector: 'app-app-use',
  templateUrl: './app-use.component.html',
  styleUrls: ['./app-use.component.css']
})
export class AppUseComponent implements AfterViewInit {

  chart: Chart;
  day = '30';

  constructor(private service: DashboardService) {
  }

  ngAfterViewInit() {
    this.initChart();
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getAppUse(this.day).subscribe((data: JsonResult<AppUse[]>) => {
      if (data.success && data.data.length > 0) {
        const dv = new View();
        dv.source(data.data).transform({
          type: 'percent',
          field: 'use',
          dimension: 'app',
          as: 'percent'
        });
        this.chart.source(dv);
        this.chart.render();
        this.chart.forceFit();
      }
    });
  }

  private initChart() {
    this.chart = new Chart({
      container: 'c2',
      height: 320,
      padding: [24, 24, 64, 24]
    });
    this.chart.coord('theta', { innerRadius: 0.4 });
    this.chart.tooltip({ title: 'use' });
    this.chart.intervalStack().position('percent').color('app').tooltip('app*percent*use', (a, p) => {
      return {
        name: a,
        value: `${(p * 100).toFixed(2)}%`
      };
    });
  }

}
