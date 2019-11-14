import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { JsonResult } from '../../../service/type';
import { Chart } from '@antv/g2';
import { View } from '@antv/data-set';


@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  styleUrls: ['./access-record.component.css']
})
export class AccessRecordComponent implements AfterViewInit {

  day = '30';

  chart: Chart;

  constructor(private service: DashboardService) {
  }

  ngAfterViewInit() {
    this.initChart();
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getAccess(this.day).subscribe((data: JsonResult<{ pv: number; uv: number; time: string }[]>) => {
      if (data.success && data.data.length > 0) {
        const dv = new View().source(data.data);
        dv.transform({
          type: 'fold',
          fields: ['pv', 'uv'],
          key: 'type',
          value: 'value'
        });
        this.chart.source(dv);
        this.chart.render();
        this.chart.forceFit();
      }
    });
  }

  private initChart() {
    this.chart = new Chart({
      container: 'c1',
      height: 320,
      padding: [24, 24, 64, 36]
    });
    const scaleProps = {
      time: {
        type: 'time',
        mask: 'M/D'
      },
      value: {
        min: 0
      }
    };
    this.chart.scale(scaleProps);
    this.chart.area().position('time*value').color('type').shape('smooth');
  }
}
