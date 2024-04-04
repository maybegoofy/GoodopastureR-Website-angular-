import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
    <header class="brand-name">
        <img class="brand-logo" src="/assets/angular.svg" alt="logo" aria-hidden="true" width="44"/>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
