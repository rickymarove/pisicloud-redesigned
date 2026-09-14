import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerArrowRight, tablerArrowDown } from '@ng-icons/tabler-icons';
import { bootstrapTelephoneFill } from '@ng-icons/bootstrap-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'software-implementation-hero',
  imports: [NgOptimizedImage, RouterLink, MatButtonModule, NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      tablerArrowRight,
      tablerArrowDown,
      bootstrapTelephoneFill,
    }),
  ],
  templateUrl: './hero.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Hero {
  private readonly platformId = inject(PLATFORM_ID);

  readonly image = input<string>('/images/software-implementation/implementation-hero.webp');

  scrollToProcess(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById('process');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
