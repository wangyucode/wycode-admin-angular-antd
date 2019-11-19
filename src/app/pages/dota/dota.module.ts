import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotaRoutingModule } from './dota-routing.module';
import { VersionComponent } from './version/version.component';
import { DotaComponent } from './dota.component';


@NgModule({
  declarations: [DotaComponent, VersionComponent],
  imports: [
    CommonModule,
    DotaRoutingModule
  ],
  exports: [DotaComponent]
})
export class DotaModule {
}
