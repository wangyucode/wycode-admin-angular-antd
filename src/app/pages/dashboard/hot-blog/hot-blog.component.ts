import { AfterViewInit, Component } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { BlogAccess, JsonResult } from '../../../service/type';
import { AxisLabel, Chart } from '@antv/g2';


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
    this.service.getBlogAccess(this.day).subscribe((data: JsonResult<BlogAccess[]>) => {
      if (data.success && data.data.length > 0) {
        // 注意由于分类轴的顺序是从下往上的，所以数组的数值顺序要从小到大
        const source = data.data.sort((a: BlogAccess, b: BlogAccess) => a.count - b.count).slice(-20);
        source.forEach(blogAccess => {
          this.chart.guide().text({
            position: [blogAccess.path, blogAccess.count],
            content: '  ' + blogAccess.count
          });
        });
        this.chart.source(source);
        this.chart.forceFit();
        this.chart.render();
      }
    });
  }

  private initChart() {
    this.chart = new Chart({
      container: 'c3',
      height: 320,
      padding: [0, 0, 12, 96]
    });
    this.chart.axis('count', false);
    const label: AxisLabel = {
      formatter(text: string): string {
        const pattern = new RegExp('/\\d{4}-\\d{2}-\\d{2}-(\\S+)\\.html');
        return pattern.exec(text)[1];
      }
    };
    this.chart.axis('path', { label });
    this.chart.coord('rect').transpose();
    this.chart.interval().position('path*count');
  }

}
