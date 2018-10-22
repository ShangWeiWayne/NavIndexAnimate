import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { ItemsRoutingService } from '../services/items-routing.service';
@Component({

  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  item: Item;

  constructor(
    route: ActivatedRoute,
    itemsService: ItemsService,
    itemsRouting: ItemsRoutingService
  ) {
    const { index } = route.snapshot.params;

    this.item = itemsService.getItemByIndex(index);

    itemsRouting.itemChange$.next(+index);
  }

  ngOnInit() {
  }

}

export interface Item {
  name: string;
}
