import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { LegoSetFormComponent } from './app/components/lego-set-form/lego-set-form.component';
import { LegoSetListComponent } from './app/components/lego-set-list/lego-set-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LegoSetFormComponent, LegoSetListComponent],
  template: `
    <div class="app-container">
      <h1>LegoApp</h1>
      <app-lego-set-form></app-lego-set-form>
      <app-lego-set-list></app-lego-set-list>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
  `]
})
export class App {
  name = 'LegoApp';
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));