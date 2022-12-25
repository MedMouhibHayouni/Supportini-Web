import { TestBed } from '@angular/core/testing';

import { UniversalAppInterceptorInterceptor } from './universal-app-interceptor.interceptor';

describe('UniversalAppInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UniversalAppInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UniversalAppInterceptorInterceptor = TestBed.inject(UniversalAppInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
