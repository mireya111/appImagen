import { TestBed } from '@angular/core/testing';

import { SubidaDeImagenesService } from './subida-de-imagenes.service';

describe('SubidaDeImagenesService', () => {
  let service: SubidaDeImagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubidaDeImagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
