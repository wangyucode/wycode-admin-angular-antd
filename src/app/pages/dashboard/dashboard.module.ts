import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { AccessGeoComponent } from './access-geo/access-geo.component';
import { AccessRecordComponent } from './access-record/access-record.component';
import { AppUseComponent } from './app-use/app-use.component';
import { HotBlogComponent } from './hot-blog/hot-blog.component';
import { ErrorStatistComponent } from './error-statist/error-statist.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    AccessGeoComponent,
    AccessRecordComponent,
    AppUseComponent,
    HotBlogComponent,
    ErrorStatistComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
