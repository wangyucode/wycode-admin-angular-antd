import { NgModule } from '@angular/core';

import { DotaRoutingModule } from './dota-routing.module';
import { VersionComponent } from './version/version.component';
import { DotaComponent } from './dota.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    DotaComponent,
    VersionComponent,
    HeroesComponent
  ],
  imports: [
    DotaRoutingModule,
    SharedModule
  ],
  exports: [DotaComponent]
})
export class DotaModule {
}
