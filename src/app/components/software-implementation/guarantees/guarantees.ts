import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerClockCheck,
  tablerLockCheck,
  tablerUserCheck,
  tablerFileCertificate,
  tablerArrowRight,
} from '@ng-icons/tabler-icons';

export interface GuaranteeItem {
  key: 'NO_DOWNTIME' | 'SECURITY' | 'SPECIALIST' | 'LOCAL_COMPLIANCE';
  icon: string;
}

@Component({
  selector: 'software-implementation-guarantees',
  imports: [RouterLink, MatButtonModule, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerClockCheck,
      tablerLockCheck,
      tablerUserCheck,
      tablerFileCertificate,
      tablerArrowRight,
    }),
  ],
  templateUrl: './guarantees.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Guarantees {
  readonly guarantees: GuaranteeItem[] = [
    { key: 'NO_DOWNTIME', icon: 'tablerClockCheck' },
    { key: 'SECURITY', icon: 'tablerLockCheck' },
    { key: 'SPECIALIST', icon: 'tablerUserCheck' },
    { key: 'LOCAL_COMPLIANCE', icon: 'tablerFileCertificate' },
  ];
}
