import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { WhyChoseUs } from './why-chose-us';

describe('WhyChoseUs', () => {
  let component: WhyChoseUs;
  let fixture: ComponentFixture<WhyChoseUs>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoseUs],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('en', {
      LANDING: {
        WHY_CHOSE_US: {
          TITLE_PREFIX: 'Why Choose ',
          BRAND: 'PISICloud',
          TITLE_SUFFIX: ' As HR Software?',
          ITEMS: {
            STABLE_FEATURES: {
              TITLE: 'Stable and rich in excellent features, developed since 1998',
              ALT: 'Stable Features',
            },
            RESPONSIVE_LOOK: {
              TITLE: 'Responsive and modern look',
              ALT: 'Responsive Look',
            },
            TESTED_COMPANIES: {
              TITLE: 'Tested to run well on more than 100 companies',
              ALT: 'Tested Companies',
            },
            CUSTOMIZATION: {
              TITLE: 'Customization according to customer requirements',
              ALT: 'Customization',
            },
            AFTER_SALES: {
              TITLE: 'Optimal after-sales service',
              ALT: 'After Sales',
            },
            INTEGRATED_MODULE: {
              TITLE: 'Complete and integrated module',
              ALT: 'Integrated Module',
            },
            SIMPLE_EASY: {
              TITLE: 'Simple and easy to understand by users',
              ALT: 'Simple and Easy',
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(WhyChoseUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the why-choose-us component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main section header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('h2');
    expect(header?.textContent).toContain('Why Choose');
    expect(header?.textContent).toContain('PISICloud');
  });

  it('should have flex-1 on the bottom card of each column for consistent alignment', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const outerGrid = compiled.querySelector('.grid.md\\:grid-cols-3');
    const columns = outerGrid ? Array.from(outerGrid.children) : [];
    expect(columns.length).toBe(3);
    columns.forEach((col) => {
      const cards = col.children;
      const lastCard = cards[cards.length - 1];
      expect(lastCard.classList.contains('flex-1')).toBe(true);
    });
  });

  it('should not render any arrow icons in the cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const svgs = compiled.querySelectorAll('.grid svg');
    expect(svgs.length).toBe(0);
  });
});