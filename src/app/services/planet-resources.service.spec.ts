import { TestBed } from '@angular/core/testing';

import { PlanetResourcesService } from './planet-resources.service';

describe('PlanetResourcesService', () => {
  let service: PlanetResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
