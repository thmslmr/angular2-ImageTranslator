/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslatorService } from './translator.service';

describe('TranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatorService]
    });
  });

  it('should ...', inject([TranslatorService], (service: TranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
