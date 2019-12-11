import { NgModule } from '@angular/core';

import { DotaRoutingModule } from './dota-routing.module';
import { VersionComponent } from './version/version.component';
import { DotaComponent } from './dota.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from '../../shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BasicInfoComponent } from './hero-detail/basic-info/basic-info.component';
import { DetailInfoComponent } from './hero-detail/detail-info/detail-info.component';
import { AbilityInfoComponent } from './hero-detail/ability-info/ability-info.component';
import { AbilityFormComponent } from './hero-detail/ability-info/ability-form/ability-form.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';


@NgModule({
  declarations: [
    DotaComponent,
    VersionComponent,
    HeroesComponent,
    HeroDetailComponent,
    BasicInfoComponent,
    DetailInfoComponent,
    AbilityInfoComponent,
    AbilityFormComponent,
    CreateHeroComponent
  ],
  imports: [
    SharedModule,
    DotaRoutingModule
  ],
  exports: [DotaComponent]
})
export class DotaModule {
}
