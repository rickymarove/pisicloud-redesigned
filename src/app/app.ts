import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoVideoModal } from './components/universal/demo-video-modal/demo-video-modal';
import { DemoVideoModalService } from './components/universal/demo-video-modal/demo-video-modal.service';
import { Interested } from './components/universal/interested/interested';
import { Footer } from './components/universal/footer/footer';
import { Navbar } from './components/universal/navbar/navbar';
import { ScrollToTop } from './components/universal/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    DemoVideoModal,
    Interested,
    Footer,
    Navbar,
    ScrollToTop,
  ],
})
export class App {
  readonly modalService = inject(DemoVideoModalService);
}

