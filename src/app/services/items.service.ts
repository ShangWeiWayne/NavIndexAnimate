import { Injectable } from '@angular/core';
import { Item } from '../item/item.component';

@Injectable()
export class ItemsService {

    constructor() { }
    private items: Item[] = [
        {name: 'Nectarine'},
        {name: 'Pomelo'},
        {name: 'Grape'},
        {name: 'Avocado'},
        {name: 'Strawberry'},
        {name: 'Dragonfruit'},
      ];

      getItems(): Item[] {
        return [...this.items];
      }
      getItemByIndex(index: number): Item {
        return this.items[index];
      }
}
