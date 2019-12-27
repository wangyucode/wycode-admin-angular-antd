import { Component } from '@angular/core';
import { DotaItem } from '../../../service/type';
import { DotaService } from '../../../service/dota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  current = 0;
  item: DotaItem = {};
  loading = false;

  constructor(private dotaService: DotaService, private router: Router) {
  }

  save() {
    this.loading = true;
    this.dotaService.setItem(this.item).subscribe(() => {
      this.router.navigate(['/dota/items']);
    }, () => this.loading = false);
  }

}
