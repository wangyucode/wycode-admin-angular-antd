import { NgModule } from '@angular/core';

import { DotaRoutingModule } from './dota-routing.module';
import { VersionComponent } from './version/version.component';
import { DotaComponent } from './dota.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from '../../shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    DotaComponent,
    VersionComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    SharedModule,
    DotaRoutingModule
  ],
  exports: [DotaComponent]
})
export class DotaModule {
}
