import { Component, Input } from '@angular/core';
import { DotaService } from '../../../../service/dota.service';
import { Hero, JsonResult } from '../../../../service/type';

@Component({
  selector: 'app-hero-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {

  @Input()
  hero: Hero = {};
  @Input()
  isCreate: boolean;

  loading = false;
  error = undefined;

  constructor(private dotaService: DotaService) {
  }

  submitForm() {
    this.loading = true;
    this.error = undefined;
    this.dotaService.setHeroBasic(this.hero).subscribe((result: JsonResult<Hero>) => {
      this.loading = false;
      console.log(result);
    }, (error: JsonResult<null>) => {
      this.loading = false;
      this.error = error.error;
    });
    console.log(this.hero);
  }
}
