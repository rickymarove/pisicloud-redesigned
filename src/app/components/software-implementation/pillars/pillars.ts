import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerDatabaseExport,
  tablerSettingsAutomation,
  tablerDevices,
  tablerChecklist,
} from '@ng-icons/tabler-icons';

export interface ImplementationPillar {
  key: 'DATA_MIGRATION' | 'CONFIGURATION' | 'INTEGRATION' | 'VALIDATION';
  icon: string;
}

@Component({
  selector: 'software-implementation-pillars',
  imports: [TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerDatabaseExport,
      tablerSettingsAutomation,
      tablerDevices,
      tablerChecklist,
    }),
  ],
  templateUrl: './pillars.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Pillars {
  readonly pillars: ImplementationPillar[] = [
    { key: 'DATA_MIGRATION', icon: 'tablerDatabaseExport' },
    { key: 'CONFIGURATION', icon: 'tablerSettingsAutomation' },
    { key: 'INTEGRATION', icon: 'tablerDevices' },
    { key: 'VALIDATION', icon: 'tablerChecklist' },
  ];
}
