import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-service.service';

describe('CartServiceService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
