import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LegoSetService } from '../../services/lego-set.service';

@Component({
  selector: 'app-lego-set-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-container">
      <h2>Add New Lego Set</h2>
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <div class="form-group">
          <label for="name">Set Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="newSet.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="setNumber">Set Number:</label>
          <input
            type="text"
            id="setNumber"
            name="setNumber"
            [(ngModel)]="newSet.setNumber"
            required
          />
        </div>
        <button type="submit">Add Set</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  `]
})
export class LegoSetFormComponent {
  newSet = {
    name: '',
    setNumber: ''
  };

  constructor(private legoSetService: LegoSetService) {}

  onSubmit() {
    if (this.newSet.name && this.newSet.setNumber) {
      this.legoSetService.addLegoSet(this.newSet);
      this.newSet = { name: '', setNumber: '' };
    }
  }
}