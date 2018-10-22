import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ItemsRoutingService } from '../services/items-routing.service';
import { RouterAnimations } from '../animations/router.animation';
import { Observable } from 'rxjs';
import { filter, map, share, pairwise, startWith } from 'rxjs/operators';
import { Item } from '../item/item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ItemsRoutingService],
  animations: [
    RouterAnimations.routeSlide
  ]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  itemChange$: Observable<number>;
  next$: Observable<number>;
  prev$: Observable<number>;
  routeTrigger$: Observable<object>;

  constructor(
    itemsService: ItemsService,
    itemsRouting: ItemsRoutingService
  ) {
    this.items = itemsService.getItems();
    this.itemChange$ = itemsRouting.itemChange$;
    this.setupRouting();
   }

  ngOnInit() {
  }

  private setupRouting() {
    this.prev$ = this.itemChange$
      .pipe(
        map(index => index === 0 ? index : index - 1),
        share()
      );
    this.next$ = this.itemChange$
      .pipe(
        map(index => index === this.items.length - 1 ? index : index + 1),
        share()
      );

    this.routeTrigger$ = this.itemChange$
      .pipe(
        startWith(0),
        pairwise(),
        map(([prev, curr]) => ({
          value: curr,
          params: {
            offsetEnter: prev > curr ? 100 : -100,
            offsetLeave: prev > curr ? -100 : 100
          }
        })),
      );
  }
}
