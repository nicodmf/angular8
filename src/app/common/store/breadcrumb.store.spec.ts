import { TestBed } from '@angular/core/testing';

import { BreadcrumbStore } from './breadcrumb.store';

describe('BreadcrumbStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbStore = TestBed.get(BreadcrumbStore);
    expect(service).toBeTruthy();
  });
});
