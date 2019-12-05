import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotaRoutingModule } from './dota-routing.module';
import { VersionComponent } from './version/version.component';
import { DotaComponent } from './dota.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [DotaComponent, VersionComponent, HeroesComponent],
  imports: [
    CommonModule,
    DotaRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ],
  exports: [DotaComponent]
})
export class DotaModule {
}
