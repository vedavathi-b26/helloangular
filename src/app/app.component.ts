import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,
  RouterModule,
],
  /*template: `<h1>Hello world!</h1>`, */
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/Veda.png" alt="logo" aria-hidden="true">
      </header>
      </a>
      <section class="content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'homes';
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3','item4'];

  addItem(newItem:string) {
     this.items.push(newItem);
  }
}
