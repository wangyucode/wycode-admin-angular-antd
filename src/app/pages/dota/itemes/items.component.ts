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
      const basicItems = data.data.filter((item) => item.cname === '基础物品');
      this.consumables = basicItems.filter((item) => item.type === '消耗品');
      this.attributes = basicItems.filter((item) => item.type === '属性');
      this.arms = basicItems.filter((item) => item.type === '军备');
      this.arcane = basicItems.filter((item) => item.type === '奥术');

      const advanceItems = data.data.filter((item) => item.cname === '升级物品');
      this.commons = advanceItems.filter((item) => item.type === '常用');
      this.assists = advanceItems.filter((item) => item.type === '辅助');
      this.multipliers = advanceItems.filter((item) => item.type === '法器');
      this.armors = advanceItems.filter((item) => item.type === '防具');
      this.weapons = advanceItems.filter((item) => item.type === '武器');
      this.halidoms = advanceItems.filter((item) => item.type === '圣物');

      this.secrets = data.data.filter((item) => item.type === '神秘商店');
      this.loading = false;
    });
  }

}
