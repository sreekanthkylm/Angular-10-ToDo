import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should return stored token from localStorage',
      () => {
        localStorage.setItem('key', '"anothertoken"');
        expect(service.getData('key')).toEqual('anothertoken');
      });
  });

  describe('setData', () => {
    it('should store the token in localStorage',
      () => {
        service.setData('key', 'sometoken');
        expect(localStorage.getItem('key')).toEqual('"sometoken"');
      });
  });
});
