import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    IconsProviderModule
  ]
})
export class SharedModule {
}
