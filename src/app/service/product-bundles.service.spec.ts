import { TestBed } from '@angular/core/testing';

import { ProductBundlesService } from './product-bundles.service';

describe('ProductBundlesService', () => {
  let service: ProductBundlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBundlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
