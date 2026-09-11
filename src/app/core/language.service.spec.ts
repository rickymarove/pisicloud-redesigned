import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let mockStorage: Record<string, string> = {};

  beforeEach(() => {
    mockStorage = {};
    const storageMock = {
      getItem: (key: string) => mockStorage[key] ?? null,
      setItem: (key: string, value: string) => {
        mockStorage[key] = value;
      },
      removeItem: (key: string) => {
        delete mockStorage[key];
      },
      clear: () => {
        mockStorage = {};
      },
    };

    Object.defineProperty(globalThis, 'localStorage', {
      value: storageMock,
      writable: true,
      configurable: true,
    });

    TestBed.configureTestingModule({
      providers: [provideTranslateService(), LanguageService],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with supported language and return observable', () => {
    mockStorage['app-lang'] = 'en';
    const init$ = service.init();
    expect(init$).toBeTruthy();
    expect(service.getLanguage()).toBe('en');
    expect(service.currentLanguage()).toBe('en');
  });

  it('should update currentLanguage on setLanguage', () => {
    service.setLanguage('id');
    expect(service.getLanguage()).toBe('id');
    expect(service.currentLanguage()).toBe('id');
  });
});
