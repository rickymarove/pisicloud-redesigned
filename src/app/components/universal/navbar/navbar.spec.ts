import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Navbar } from './navbar';
import { LanguageService } from '../../../core/language.service';
import { NAVBAR_FEATURES, NAVBAR_RESOURCES, NAVBAR_SUPPORTS } from '../../../data/navbar';

@Component({
  template: '',
})
class DummyComponent {}

describe('UniversalNavbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let languageService: LanguageService;
  let translateService: TranslateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        provideRouter([
          { path: '', component: DummyComponent },
          { path: 'contact-us', component: DummyComponent },
          { path: 'feature', component: DummyComponent },
          { path: 'feature/:slug', component: DummyComponent },
          { path: 'about-pisi', component: DummyComponent },
          { path: 'training-implementation', component: DummyComponent },
          { path: 'customize-module', component: DummyComponent },
        ]),
        provideTranslateService({
          fallbackLang: 'en',
        }),
        LanguageService,
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    languageService = TestBed.inject(LanguageService);
    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      UNIVERSAL: {
        NAVBAR: {
          FEATURES_LABEL: 'Features',
          RESOURCES_LABEL: 'Resources',
          SUPPORT_LABEL: 'Support',
          CONTACT_US: 'Contact Us',
          LANGUAGES_LABEL: 'Languages',
          ARIA: {
            FEATURES_MENU: 'Features navigation menu',
            RESOURCES_MENU: 'Resources navigation menu',
            SUPPORT_MENU: 'Support navigation menu',
            LANGUAGE_MENU: 'Select Language',
            MOBILE_NAV: 'Mobile Navigation Menu',
            TOGGLE_NAV: 'Toggle navigation menu',
            CLOSE_NAV: 'Close navigation menu',
          },
          FEATURES_MENU: {
            TITLE: 'Features',
            ITEMS: {
              RECRUITMENT: {
                TITLE: 'Recruitment',
                DESC: 'New employee recruitment process',
              },
            },
          },
          RESOURCES_MENU: {
            TITLE: 'Resources',
            ITEMS: {
              ABOUT: {
                TITLE: 'About PISICloud',
                DESC: 'Get to know PISICloud in depth.',
              },
            },
          },
          SUPPORT_MENU: {
            TITLE: 'Support',
            ITEMS: {
              SOFTWARE_IMPLEMENTATION: {
                TITLE: 'Software Implementation',
                DESC: 'Complete enterprise software setup',
              },
              TRAINING: {
                TITLE: 'Training & Re-Implementation',
                DESC: 'Comprehensive team training sessions',
              },
              CUSTOMIZE: {
                TITLE: 'Customize Module',
                DESC: 'Tailored modular business solutions',
              },
            },
          },
        },
      },
    });
    translateService.setTranslation('id', {
      UNIVERSAL: {
        NAVBAR: {
          FEATURES_LABEL: 'Fitur',
          RESOURCES_LABEL: 'Sumber Daya',
          SUPPORT_LABEL: 'Dukungan',
          CONTACT_US: 'Hubungi Kami',
          LANGUAGES_LABEL: 'Bahasa',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should have 12 features and 4 resources configured in navbar data', () => {
    expect(NAVBAR_FEATURES.length).toBe(12);
    expect(NAVBAR_RESOURCES.length).toBe(4);
    const aboutResource = NAVBAR_RESOURCES.find((r) => r.id === 'about');
    expect(aboutResource?.route).toBe('/about-pisi');
    const contactResource = NAVBAR_RESOURCES.find((r) => r.id === 'contact');
    expect(contactResource?.route).toBe('/contact-us');
  });

  it('should have 3 support items configured in navbar data', () => {
    expect(NAVBAR_SUPPORTS.length).toBe(3);
    const software = NAVBAR_SUPPORTS.find((s) => s.id === 'software-implementation');
    expect(software?.route).toBe('/');
    expect(software?.fragment).toBe('solution');
    const training = NAVBAR_SUPPORTS.find((s) => s.id === 'training');
    expect(training?.route).toBe('/training-implementation');
    const customize = NAVBAR_SUPPORTS.find((s) => s.id === 'customize');
    expect(customize?.route).toBe('/customize-module');
  });

  it('should render translated contact button text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    expect(contactBtn?.textContent).toContain('Contact Us');
  });

  it('should include Contact Us in resources navigation redirecting to /contact-us', () => {
    const contactResource = NAVBAR_RESOURCES.find((r) => r.id === 'contact');
    expect(contactResource).toBeTruthy();
    expect(contactResource?.route).toBe('/contact-us');
    expect(contactResource?.iconType).toBe('contact');
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should toggle and close navigation menus', () => {
    expect(component.activeMenu()).toBeNull();
    component.toggleMenu('features');
    expect(component.activeMenu()).toBe('features');
    component.toggleMenu('features');
    expect(component.activeMenu()).toBeNull();

    component.toggleMenu('resources');
    expect(component.activeMenu()).toBe('resources');
    component.toggleMenu('resources');
    expect(component.activeMenu()).toBeNull();

    component.toggleMenu('support');
    expect(component.activeMenu()).toBe('support');
    component.closeMenus();
    expect(component.activeMenu()).toBeNull();
  });

  it('should update language and sync with LanguageService when onLanguageSelected is called', () => {
    const idOption = { code: 'id', name: 'Indonesia', flag: '🇮🇩' };
    component.onLanguageSelected(idOption);
    fixture.detectChanges();

    expect(languageService.getLanguage()).toBe('id');
    expect(component.selectedLanguage().code).toBe('id');
    expect(component.activeMenu()).toBeNull();

    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    expect(contactBtn?.textContent).toContain('Hubungi Kami');
  });

  it('should close mobile menu and active dropdown on Escape key', () => {
    component.isMobileMenuOpen.set(true);
    component.activeMenu.set('features');

    component.onEscape();

    expect(component.isMobileMenuOpen()).toBe(false);
    expect(component.activeMenu()).toBeNull();
  });

  it('should keep mobile sidebar outside of header to prevent backdrop-filter containing block trap', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebarInsideHeader = compiled.querySelector('header aside#mobile-sidebar');
    const sidebar = compiled.querySelector('aside#mobile-sidebar');

    expect(sidebarInsideHeader).toBeNull();
    expect(sidebar).toBeTruthy();
  });

  it('should toggle backdrop-blur-md and translucent background on header when scrolled past viewport', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');

    // Default: not scrolled past viewport
    expect(header?.classList.contains('bg-[#eef4f8]')).toBe(true);
    expect(header?.classList.contains('backdrop-blur-md')).toBe(false);

    // Scrolled past viewport
    component.isScrolledPastViewport.set(true);
    fixture.detectChanges();

    expect(header?.classList.contains('backdrop-blur-md')).toBe(true);
    expect(header?.classList.contains('bg-[#eef4f8]/80')).toBe(true);

    // Back to top
    component.isScrolledPastViewport.set(false);
    fixture.detectChanges();

    expect(header?.classList.contains('bg-[#eef4f8]')).toBe(true);
    expect(header?.classList.contains('backdrop-blur-md')).toBe(false);
  });

  it('should toggle inert and aria-hidden attributes on mobile sidebar based on isMobileMenuOpen', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebar = compiled.querySelector('aside#mobile-sidebar');

    // Closed by default
    expect(sidebar?.hasAttribute('inert')).toBe(true);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('true');

    // Open menu
    component.toggleMobileMenu();
    fixture.detectChanges();

    expect(sidebar?.hasAttribute('inert')).toBe(false);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('false');

    // Close menu
    component.closeMobileMenu();
    fixture.detectChanges();

    expect(sidebar?.hasAttribute('inert')).toBe(true);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should mark Features menu button active when on /feature/attendance', async () => {
    await router.navigateByUrl('/feature/attendance');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const featuresButton = compiled.querySelector('navbar-features-menu button');
    expect(featuresButton?.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(featuresButton?.classList.contains('text-[#00382f]')).toBe(true);
    expect(featuresButton?.classList.contains('font-semibold')).toBe(true);
  });

  it('should mark Resources menu button active when on /about-pisi', async () => {
    await router.navigateByUrl('/about-pisi');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const resourcesButton = compiled.querySelector('navbar-resources-menu button');
    expect(resourcesButton?.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(resourcesButton?.classList.contains('text-[#00382f]')).toBe(true);
    expect(resourcesButton?.classList.contains('font-semibold')).toBe(true);
  });

  it('should mark Support menu button active when on /training-implementation', async () => {
    await router.navigateByUrl('/training-implementation');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const supportButton = compiled.querySelector('navbar-support-menu button');
    expect(supportButton?.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(supportButton?.classList.contains('text-[#00382f]')).toBe(true);
    expect(supportButton?.classList.contains('font-semibold')).toBe(true);
  });
});

