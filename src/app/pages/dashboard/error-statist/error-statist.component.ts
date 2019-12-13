import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { ErrorElement, JsonResult } from '../../../service/type';


@Component({
  selector: 'app-error-statist',
  templateUrl: './error-statist.component.html',
  styleUrls: ['./error-statist.component.css']
})
export class ErrorStatistComponent implements OnInit {

  dataSource: ErrorElement[];
  day = '30';
  code = '500';
  loading = true;

  constructor(private service: DashboardService) {
  }

  ngOnInit(): void {
    this.onQueryChange();
  }

  onQueryChange() {
    this.loading = true;
    this.service.getError(this.day, this.code).subscribe((data: JsonResult<ErrorElement[]>) => {
      this.dataSource = data.data;
      this.loading = false;
    });
  }

}
