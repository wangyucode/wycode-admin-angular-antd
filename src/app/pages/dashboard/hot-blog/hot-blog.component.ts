import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { AppUse, JsonResult } from '../../../service/type';
import { Chart } from '@antv/g2';
import { View } from '@antv/data-set';


@Component({
  selector: 'app-hot-blog',
  templateUrl: './hot-blog.component.html',
  styleUrls: ['./hot-blog.component.css']
})
export class HotBlogComponent implements AfterViewInit {

  chart: Chart;
  day = '30';

  constructor(private service: DashboardService) {
  }

  ngAfterViewInit() {
    this.initChart();
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getBlogAccess(this.day).subscribe((data: JsonResult<AppUse[]>) => {
      if (data.success && data.data.length > 0) {
        const tree = { name: 'root', children: data.data };
        const dv = new View().source(tree, { type: 'hierarchy' })
          .transform({
            field: 'count',
            type: 'hierarchy.treemap',
            tile: 'treemapResquarify',
            as: ['x', 'y']
          });
        const nodes = dv.getAllNodes();
        nodes.map((node: { name: string; data: { path: string; count: number }; value: any }) => {
          node.name = node.data.path;
          node.value = node.data.count;
          return node;
        });
        this.chart.source(nodes);
        this.chart.forceFit();
        this.chart.render();
      }
    });
  }

  private initChart() {
    this.chart = new Chart({
      container: 'c3',
      height: 320,
      padding: [0, 0, 0, 0]
    });
    this.chart.legend(false);
    this.chart.tooltip({ showTitle: false });
    this.chart.axis(false);
    this.chart.polygon().position('x*y').color('name').tooltip('name*value', (name, value) => {
      return {
        name,
        value: `访问量：${value}`
      };
    });
  }

}
