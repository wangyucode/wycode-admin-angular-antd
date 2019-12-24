import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DotaService } from '../../../service/dota.service';
import { DotaItem, JsonResult } from '../../../service/type';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: DotaItem;
  loading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dotaService: DotaService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: any) => {
      this.item = { ...paramMap.params };
      this.loading = true;
      this.dotaService.getItemDetail(this.item.key).subscribe((data: JsonResult<DotaItem>) => {
        this.item = data.data;
        this.loading = false;
      });
    });
  }


  onBack() {
    this.router.navigate(['/dota/items']);
  }

  delete() {
    this.loading = true;
    this.dotaService.deleteItem(this.item.key).subscribe(() => {
      this.onBack();
    }, () => {
      this.loading = false;
    });
  }
}
