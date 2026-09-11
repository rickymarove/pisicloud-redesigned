import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { SupportMenu } from './support-menu';

@Component({
  template: '',
})
class DummyRouteComponent {}

describe('SupportMenu', () => {
  let component: SupportMenu;
  let fixture: ComponentFixture<SupportMenu>;
  let router: Router;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportMenu],
      providers: [
        provideRouter([
          { path: '', component: DummyRouteComponent },
          { path: 'training-implementation', component: DummyRouteComponent },
          { path: 'customize-module', component: DummyRouteComponent },
          { path: 'about-pisi', component: DummyRouteComponent },
          { path: 'contact-us', component: DummyRouteComponent },
        ]),
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      UNIVERSAL: {
        NAVBAR: {
          SUPPORT_LABEL: 'Support',
          ARIA: {
            SUPPORT_MENU: 'Support navigation menu',
          },
          SUPPORT_MENU: {
            TITLE: 'Support',
            ITEMS: {
              SOFTWARE_IMPLEMENTATION: {
                TITLE: 'Software Implementation',
                DESC: 'Implementation description',
              },
              TRAINING: {
                TITLE: 'Training & Re-Implementation',
                DESC: 'Training description',
              },
              CUSTOMIZE: {
                TITLE: 'Customize Module',
                DESC: 'Customize description',
              },
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(SupportMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create support menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should not be active on root path /', () => {
    expect(component.isActive()).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(false);
  });

  it('should be active on /training-implementation', async () => {
    await router.navigateByUrl('/training-implementation');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });

  it('should be active on /customize-module', async () => {
    await router.navigateByUrl('/customize-module');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
  });

  it('should not be active on /about-pisi', async () => {
    await router.navigateByUrl('/about-pisi');
    fixture.detectChanges();
    expect(component.isActive()).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(false);
  });

  it('should render active state on mobile variant', async () => {
    fixture.componentRef.setInput('variant', 'mobile');
    await router.navigateByUrl('/training-implementation');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });

  it('should emit menuToggled when desktop button is clicked', () => {
    let toggled = false;
    component.menuToggled.subscribe(() => {
      toggled = true;
    });

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(toggled).toBe(true);
  });

  it('should toggle mobile accordion on click', () => {
    fixture.componentRef.setInput('variant', 'mobile');
    fixture.detectChanges();

    expect(component.isMobileExpanded()).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.isMobileExpanded()).toBe(true);
  });
});
