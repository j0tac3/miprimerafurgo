import { TestBed } from '@angular/core/testing';

import { ElementsaventuraService } from './elementsaventura.service';

describe('ElementsaventuraService', () => {
  let service: ElementsaventuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsaventuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
