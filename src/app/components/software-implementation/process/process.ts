import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerChecklist,
  tablerSettingsAutomation,
  tablerDatabaseExport,
  tablerShieldCheck,
  tablerArrowRight,
} from '@ng-icons/tabler-icons';

export interface ImplementationStep {
  key: 'STEP_1' | 'STEP_2' | 'STEP_3' | 'STEP_4';
  number: string;
  icon: string;
}

@Component({
  selector: 'software-implementation-process',
  imports: [TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerChecklist,
      tablerSettingsAutomation,
      tablerDatabaseExport,
      tablerShieldCheck,
      tablerArrowRight,
    }),
  ],
  templateUrl: './process.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Process {
  readonly steps: ImplementationStep[] = [
    { key: 'STEP_1', number: '01', icon: 'tablerChecklist' },
    { key: 'STEP_2', number: '02', icon: 'tablerSettingsAutomation' },
    { key: 'STEP_3', number: '03', icon: 'tablerDatabaseExport' },
    { key: 'STEP_4', number: '04', icon: 'tablerShieldCheck' },
  ];
}
