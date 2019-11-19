import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionComponent } from './version/version.component';


const routes: Routes = [
    { path: '', redirectTo: 'version' },
    {
      path: 'version',
      component: VersionComponent,
      data: { breadcrumb: 'Version' }
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotaRoutingModule {
}
