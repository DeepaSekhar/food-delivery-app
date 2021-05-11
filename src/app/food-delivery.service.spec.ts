import { TestBed } from '@angular/core/testing';

import { FoodDeliveryService } from './food-delivery.service';

describe('FoodDeliveryService', () => {
  let service: FoodDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
