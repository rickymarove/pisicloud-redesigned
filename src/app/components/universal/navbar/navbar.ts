import {
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FeaturesMenu } from './features-menu/features-menu';
import { ResourcesMenu } from './resources-menu/resources-menu';
import { SupportMenu } from './support-menu/support-menu';
import {
  LanguageMenu,
  type LanguageOption,
  SUPPORTED_LANGUAGES,
} from './language-menu/language-menu';
import { LanguageService, type Language } from '../../../core/language.service';

export { type LanguageOption, SUPPORTED_LANGUAGES };

export type ActiveNavMenu = 'features' | 'resources' | 'support' | 'language' | null;

@Component({
  selector: 'universal-navbar',
  imports: [
    RouterLink,
    NgOptimizedImage,
    TranslatePipe,
    FeaturesMenu,
    ResourcesMenu,
    SupportMenu,
    LanguageMenu,
  ],
  templateUrl: './navbar.html',
  styles: ``,
  host: {
    class: 'block w-full sticky top-0 z-50',
    '(keydown.escape)': 'onEscape()',
    '(document:click)': 'onDocumentClick($event)',
    '(window:scroll)': 'onWindowScroll()',
    '(window:resize)': 'onWindowScroll()',
  },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly languageService = inject(LanguageService);

  readonly isMobileMenuOpen = signal(false);
  readonly activeMenu = signal<ActiveNavMenu>(null);
  readonly isScrolledPastViewport = signal(false);

  readonly selectedLanguage = computed<LanguageOption>(() => {
    const langCode = this.languageService.currentLanguage();
    return (
      SUPPORTED_LANGUAGES.find((l) => l.code === langCode) ?? SUPPORTED_LANGUAGES[0]
    );
  });

  constructor() {
    effect(() => {
      const isOpen = this.isMobileMenuOpen();
      if (isPlatformBrowser(this.platformId)) {
        if (isOpen) {
          this.document.body.style.overflow = 'hidden';
          this.document.documentElement.style.overflow = 'hidden';
        } else {
          this.document.body.style.overflow = '';
          this.document.documentElement.style.overflow = '';
        }
      }
    });

    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.document.body.style.overflow = '';
        this.document.documentElement.style.overflow = '';
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
    }
  }

  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY || this.document.documentElement.scrollTop || 0;
    const viewportHeight = window.innerHeight || this.document.documentElement.clientHeight || 0;
    const isPast = scrollY >= viewportHeight;
    if (this.isScrolledPastViewport() !== isPast) {
      this.isScrolledPastViewport.set(isPast);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleMenu(menu: 'features' | 'resources' | 'support' | 'language'): void {
    this.activeMenu.update((curr) => (curr === menu ? null : menu));
  }

  closeMenus(): void {
    this.activeMenu.set(null);
  }

  onLanguageSelected(lang: LanguageOption): void {
    this.languageService.setLanguage(lang.code as Language);
    this.closeMenus();
  }

  onEscape(): void {
    this.closeMobileMenu();
    this.closeMenus();
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('[data-nav-dropdown]')) {
      this.closeMenus();
    }
  }
}
