import { Component } from '@angular/core';
import { Hero } from '../../components/software-implementation/hero/hero';
import { Pillars } from '../../components/software-implementation/pillars/pillars';
import { Process } from '../../components/software-implementation/process/process';
import { Guarantees } from '../../components/software-implementation/guarantees/guarantees';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-software-implementation',
  imports: [Hero, Pillars, Process, Guarantees, Faq, CompaniesMarquee],
  templateUrl: './software-implementation.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class SoftwareImplementation {}
