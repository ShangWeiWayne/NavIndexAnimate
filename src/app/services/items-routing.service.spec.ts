/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsRoutingService } from './items-routing.service';

describe('Service: ItemsRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsRoutingService]
    });
  });

  it('should ...', inject([ItemsRoutingService], (service: ItemsRoutingService) => {
    expect(service).toBeTruthy();
  }));
});
