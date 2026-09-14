import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Process } from './process';

describe('SoftwareImplementation Process', () => {
  let component: Process;
  let fixture: ComponentFixture<Process>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Process],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('en', {
      SOFTWARE_IMPLEMENTATION: {
        PROCESS: {
          TITLE_PREFIX: 'A Structured 4-Stage ',
          TITLE_HIGHLIGHT: 'Rollout Framework',
          TITLE_SUFFIX: '',
          DESCRIPTION: 'A proven, transparent methodology.',
          STEPS: {
            STEP_1: {
              STEP_NUMBER: '01',
              PHASE: 'Phase 01',
              TITLE: 'Discovery & Scope Audit',
              DESCRIPTION: 'In-depth workshops with your HR team.',
            },
            STEP_2: {
              STEP_NUMBER: '02',
              PHASE: 'Phase 02',
              TITLE: 'System Setup & Configuration',
              DESCRIPTION: 'Environment provisioning and hierarchy.',
            },
            STEP_3: {
              STEP_NUMBER: '03',
              PHASE: 'Phase 03',
              TITLE: 'Data Migration & Cutover',
              DESCRIPTION: 'Secure transfer of master data.',
            },
            STEP_4: {
              STEP_NUMBER: '04',
              PHASE: 'Phase 04',
              TITLE: 'Parallel Run, Go-Live & Hypercare',
              DESCRIPTION: 'Dual-system payroll run verification.',
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Process);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create process component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 process steps', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const steps = compiled.querySelectorAll('#process h3');
    expect(steps.length).toBe(4);
    expect(steps[0].textContent).toContain('Discovery & Scope Audit');
    expect(steps[1].textContent).toContain('System Setup & Configuration');
    expect(steps[2].textContent).toContain('Data Migration & Cutover');
    expect(steps[3].textContent).toContain('Parallel Run, Go-Live & Hypercare');
  });

  it('should render vertical spine and 4 connecting nodes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const spine = compiled.querySelector('.timeline-spine');
    expect(spine).toBeTruthy();

    const nodes = compiled.querySelectorAll('.timeline-node');
    expect(nodes.length).toBe(4);
  });

  it('should alternate rows left and right along the spine', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('.timeline-row');
    expect(rows.length).toBe(4);

    // Phase 01: Right-aligned (even index 0)
    expect(rows[0].classList.contains('lg:justify-end')).toBe(true);
    expect(rows[0].classList.contains('lg:justify-start')).toBe(false);

    // Phase 02: Left-aligned (odd index 1)
    expect(rows[1].classList.contains('lg:justify-start')).toBe(true);
    expect(rows[1].classList.contains('lg:justify-end')).toBe(false);

    // Phase 03: Right-aligned (even index 2)
    expect(rows[2].classList.contains('lg:justify-end')).toBe(true);
    expect(rows[2].classList.contains('lg:justify-start')).toBe(false);

    // Phase 04: Left-aligned (odd index 3)
    expect(rows[3].classList.contains('lg:justify-start')).toBe(true);
    expect(rows[3].classList.contains('lg:justify-end')).toBe(false);
  });

  it('should not contain badge or chip elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-chip')).toBeFalsy();
    expect(compiled.querySelector('.badge')).toBeFalsy();
  });
});
