import { Component, OnInit } from '@angular/core';
import { DotaService } from '../../../service/dota.service';
import { DotaItem, JsonResult } from '../../../service/type';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  consumables: DotaItem[];
  attributes: DotaItem[];
  arms: DotaItem[];
  arcane: DotaItem[];
  commons: DotaItem[];
  assists: DotaItem[];
  multipliers: DotaItem[];
  armors: DotaItem[];
  weapons: DotaItem[];
  halidoms: DotaItem[];
  secrets: DotaItem[];

  loading = true;

  constructor(private dotaService: DotaService) {
  }

  ngOnInit() {
    this.dotaService.getItems().subscribe((data: JsonResult<DotaItem[]>) => {
      console.log(data);
      this.consumables = data.data.filter((item) => item.type === '消耗品');
      this.attributes = data.data.filter((item) => item.type === '属性');
      this.arms = data.data.filter((item) => item.type === '军备');
      this.arcane = data.data.filter((item) => item.type === '奥术');
      this.commons = data.data.filter((item) => item.type === '常用');
      this.assists = data.data.filter((item) => item.type === '辅助');
      this.multipliers = data.data.filter((item) => item.type === '法器');
      this.armors = data.data.filter((item) => item.type === '防具');
      this.weapons = data.data.filter((item) => item.type === '武器');
      this.halidoms = data.data.filter((item) => item.type === '圣物');
      this.secrets = data.data.filter((item) => item.type === '神秘商店');
      this.loading = false;
    });
  }

}
