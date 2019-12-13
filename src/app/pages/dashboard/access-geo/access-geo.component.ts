import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { AppUse, JsonResult } from '../../../service/type';
import { Chart } from '@antv/g2';
import { View } from '@antv/data-set';
// @ts-ignore
import worldMap from 'src/assets/world.json';



@Component({
  selector: 'app-access-geo',
  templateUrl: './access-geo.component.html',
  styleUrls: ['./access-geo.component.css']
})
export class AccessGeoComponent implements AfterViewInit {

  chart: Chart;
  day = '30';

  constructor(private service: DashboardService) {
  }

  ngAfterViewInit() {
    this.initChart();
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getAccessGeo(this.day).subscribe((data: JsonResult<AppUse[]>) => {
      if (data.success && data.data.length > 0) {
        const dv = new View('back').source(worldMap, { type: 'GeoJSON' })
          .transform({
            type: 'geo.projection',
            projection: 'geoMercator',
            as: ['x', 'y', 'centroidX', 'centroidY']
          });
        const bgView = this.chart.view();
        bgView.source(dv);
        bgView.tooltip(false);
        bgView.polygon().position('x*y').style({
          fill: '#DDDDDD',
          stroke: '#b1b1b1',
          lineWidth: 0.5,
          fillOpacity: 0.85
        });
        const userData = new View().source(data.data)
          .transform({
            type: 'map',
            callback: function callback(obj) {
              const projectedCoord = dv.geoProjectPosition([obj.lng, obj.lat], 'geoMercator');
              obj.x = projectedCoord[0];
              obj.y = projectedCoord[1];
              return obj;
            }
          });
        const pointView = this.chart.view();
        pointView.source(userData);
        pointView.point()
          .position('x*y')
          .size('count', [1, 20])
          .shape('circle')
          .opacity(0.45)
          .color('#FF2F29')
          .tooltip('lat*lng*count');
        this.chart.render();
        this.chart.forceFit();
      }
    });
  }

  private initChart() {
    this.chart = new Chart({
      container: 'c4',
      height: 320,
      padding: [0, 0, 0, 0]
    });
    this.chart.scale({
      x: {
        sync: true,
        nice: false
      },
      y: {
        sync: true,
        nice: false
      }
    });
    this.chart.coord('rect').reflect();
    this.chart.legend(false);
    this.chart.tooltip({ showTitle: false });
    this.chart.axis(false);
  }
}
