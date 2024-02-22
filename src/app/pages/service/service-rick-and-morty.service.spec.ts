import { TestBed } from '@angular/core/testing';

import { ServiceRickAndMortyService } from './service-rick-and-morty.service';

describe('ServiceRickAndMortyService', () => {
  let service: ServiceRickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
