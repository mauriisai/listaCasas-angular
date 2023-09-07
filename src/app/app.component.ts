import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
                <header class="brand-name" >
                <img class="brand-logo" style="margin-left: 30px; margin-top: 10px;" 
                  src="./assets/logo.svg" alt="logo" routerLink="" aria-hidden="true">
                </header>
                <section class="content">
                  <router-outlet></router-outlet>
                </section>
              </main>`,

  styleUrls: ['./app.component.css'],
  imports:[HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
