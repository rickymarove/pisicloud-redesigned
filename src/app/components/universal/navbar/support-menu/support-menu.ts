import { Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerCode,
  tablerSchool,
  tablerAdjustments,
} from '@ng-icons/tabler-icons';
import {
  NavbarSupportIconType,
  NavbarSupportItemConfig,
  NAVBAR_SUPPORTS,
} from '../../../../data/navbar';

export type SupportIconType = NavbarSupportIconType;
export type SupportMenuItem = NavbarSupportItemConfig;

@Component({
  selector: 'navbar-support-menu',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerCode,
      tablerSchool,
      tablerAdjustments,
    }),
  ],
  templateUrl: './support-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class SupportMenu {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly supports = NAVBAR_SUPPORTS;

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly isActive = computed(() => {
    const cleanUrl = (this.currentUrl() ?? '').split('?')[0].split('#')[0];
    if (!cleanUrl || cleanUrl === '/') return false;
    return this.supports.some(
      (s) => s.route !== '/' && (cleanUrl === s.route || cleanUrl.startsWith(s.route + '/')),
    );
  });

  toggleMenu(): void {
    this.menuToggled.emit();
  }

  toggleMobileAccordion(): void {
    this.isMobileExpanded.update((open) => !open);
  }

  onItemClick(): void {
    this.menuClosed.emit();
    this.itemClick.emit();
  }
}
