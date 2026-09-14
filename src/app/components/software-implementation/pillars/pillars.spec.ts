import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Pillars } from './pillars';

describe('SoftwareImplementation Pillars', () => {
  let component: Pillars;
  let fixture: ComponentFixture<Pillars>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pillars],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('en', {
      SOFTWARE_IMPLEMENTATION: {
        PILLARS: {
          TITLE_PREFIX: 'Comprehensive Services for ',
          TITLE_HIGHLIGHT: 'Seamless Deployment',
          TITLE_SUFFIX: '',
          DESCRIPTION: 'Structured services ensure operational readiness.',
          ITEMS: {
            DATA_MIGRATION: {
              TITLE: 'Automated & Secure Data Migration',
              DESCRIPTION: 'Complete extraction, cleansing, and validation.',
            },
            CONFIGURATION: {
              TITLE: 'Custom Workflow & Policy Setup',
              DESCRIPTION: 'Tailoring complex shift rotations and approvals.',
            },
            INTEGRATION: {
              TITLE: 'Hardware & Biometric Integration',
              DESCRIPTION: 'Direct plug-and-play connectivity.',
            },
            VALIDATION: {
              TITLE: 'Parallel Runs & Rigorous UAT',
              DESCRIPTION: 'Comprehensive parallel testing.',
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Pillars);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create pillars component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 implementation pillars', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('#pillars h3');
    expect(cards.length).toBe(4);
    expect(cards[0].textContent).toContain('Automated & Secure Data Migration');
    expect(cards[1].textContent).toContain('Custom Workflow & Policy Setup');
    expect(cards[2].textContent).toContain('Hardware & Biometric Integration');
    expect(cards[3].textContent).toContain('Parallel Runs & Rigorous UAT');
  });

  it('should not contain badge or chip elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-chip')).toBeFalsy();
    expect(compiled.querySelector('.badge')).toBeFalsy();
  });
});
