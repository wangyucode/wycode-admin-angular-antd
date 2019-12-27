import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DotaItem, JsonResult } from '../../../../service/type';
import { DotaService } from '../../../../service/dota.service';

@Component({
  selector: 'app-item-component-info',
  templateUrl: './component-info.component.html',
  styleUrls: ['./component-info.component.css']
})
export class ComponentInfoComponent implements OnInit {

  @Input()
  item: DotaItem = {};
  components: DotaItem[] = [];
  allItems: DotaItem[] = [];
  loading = false;
  inputModalVisible = false;
  inputKey = null;
  scrollCost = 0;
  @Output()
  save = new EventEmitter();

  constructor(private dotaService: DotaService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.dotaService.getItems().subscribe((data: JsonResult<DotaItem[]>) => {
      this.allItems = data.data;
      let totalCost = 0;
      if (this.item.components) {
        this.item.components.forEach(key => {
          const item = this.allItems.find(i => i.key === key);
          totalCost += item.cost;
          this.components.push(item);
        });
      }
      this.scrollCost = this.item.cost - totalCost;
      this.loading = false;
    });
  }

  add(item: DotaItem) {
    this.components.push(item);
    this.scrollCost -= item.cost;
    this.inputModalVisible = false;
  }

  delete(index: number) {
    this.scrollCost += this.components.splice(index, 1)[0].cost;
  }

  submitForm(): void {
    const components = [];
    this.components.forEach(item => components.push(item.key));
    this.item.components = components;
    this.save.emit();
  }
}
