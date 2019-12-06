import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionComponent } from './version/version.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
    { path: '', redirectTo: 'version' },
    {
      path: 'version',
      component: VersionComponent,
      data: { breadcrumb: '版本管理' }
    },
    {
      path: 'heroes',
      component: HeroesComponent,
      data: { breadcrumb: '英雄列表' }
    },
    {
      path: 'hero/:name',
      component: HeroesComponent,
      data: { breadcrumb: '英雄详情' }
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotaRoutingModule {
}
